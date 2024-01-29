<?php
namespace myExplorer;

use Archive7z\Archive7z;
use Archive7z\Exception;
use \stdClass;
use \ZipArchive;
use \RarArchive;

class FileManager {

    private static function getStructure(string $name, string $path = '', string $place = '', int $size = null, int $mt = null, string $type = 'dir'): array
    {
        switch ($type){
            case 'root': return [
                $name,
                $place ? disk_free_space(DATA . $place) : null,
                $path,
                true,
                md5($place)
            ];
            case 'dir': return [
                $name,
                $place ? disk_free_space($place) : null,
                null,
                true,
                null,
                date("Y-m-d\TH:i:s.u\Z", $mt ?: filemtime($place))
            ];
            case 'file': return [
                $name,
                $size ?: filesize($place),
                null,
                date("Y-m-d\TH:i:s.u\Z", $mt ?: filemtime($place))
            ];
        }
        return [];
    }

    public static function getRoots(string $path): string
    {
        $files = scandir($path);
        $tree = [];
        foreach ( $files as $file ){
            $place = $path ."/". $file;
            if ( in_array($file, [".", ".."]) || !is_dir($place) ) continue;
            $tree[] = self::getStructure($file, $path, $place, 0, 0,'root');
        }
        return json_encode($tree);
    }

    public static function scan(string $path): string
    {
        $obj = new stdClass();
        $obj->Success = false;
        $obj->Result = new stdClass();
        $obj->Result->Folders = [];
        $obj->Result->Files = [];

        $json = '';
        if ( $ext = self::isArchive($path) ) $json = self::scanArchive($path, $ext, $obj);
        //if ( is_file($path) &&  )
        if ( is_dir($path) ) $json = self::scanDir($path, $obj);
        return $json;
    }

    public static function isArchive(string $path): string
    {
        $matches = [];
        preg_match('#\.(zip|7z|rar|tar)#', $path, $matches);
        return count($matches) ? array_pop($matches) : "";
    }

    public static function scanDir(string $path, stdClass &$obj): string
    {
        foreach ( scandir($path) as $file ){
            $place = $path ."/". $file;
            if ( in_array($file, [".", ".."]) ) continue;
            $obj->Result->{ is_dir($place)?'Folders':'Files' }[] = self::getStructure($file, $path, $place, 0, 0, is_dir($place)?'dir':'file');
        }
        $obj->Success = true;
        return json_encode($obj);
    }

    /**
     * @throws Exception
     */
    public static function scanArchive(string $path, string $ext, stdClass &$obj): string
    {
        $parts = explode($ext, $path);
        $archive_path = $parts[0].$ext;
        $inner_path = preg_replace('#^/#', '', str_replace("\\", '/', $parts[1]));
        switch ( strtolower($ext) ){
            case 'zip':
                $zip = new ZipArchive();
                $zip->open($archive_path);
                for ($i = 0; $i < $zip->numFiles; $i++) {
                    $stat = $zip->statIndex($i);
                    //$stat['name'] = mb_convert_encoding($stat['name'], 'UTF-8', mb_detect_encoding($stat['name']));
                    $is_folder = preg_match('#/$#', $stat['name']);
                    $stat['name'] = preg_replace('#/$#', '', $stat['name']);

                    $arr = self::getStructure($stat['name'], $path, '', $stat['size'], $stat['mtime'],$is_folder?'dir':'file');

                    if ( !empty($inner_path) ){
                        if ( !strstr($arr[0], $inner_path.'/') ) continue;
                        $arr[0] = str_replace($inner_path.'/', '', $arr[0]);
                    }
                    if ( strstr($arr[0], '/') ) continue;
                    $obj->Result->{$is_folder ? 'Folders' : 'Files'}[] = $arr;
                }
                break;

            case '7z':
                $_7z = new Archive7z($archive_path);
                foreach ($_7z->getEntries() as $entry) {
                    $is_folder = $entry->getAttributes() == 'D';
                    $file = $entry->getPath();

                    $arr = self::getStructure($file, $path, '', $entry->getSize(), $entry->getModified(),$is_folder?'dir':'file');

                    if ( !empty($inner_path) ){
                        if ( !strstr($arr[0], $inner_path.DS) ) continue;
                        $arr[0] = str_replace($inner_path.DS, '', $arr[0]);
                    }
                    if ( strstr($arr[0], DS) ) continue;
                    $obj->Result->{$is_folder ? 'Folders' : 'Files'}[] = $arr;
                }
                break;

            case 'rar':
                /*$rar = new RarArchive();
                $rar->open($archive_path);
                foreach ($rar->getEntries() as $entry) {
                    //$stat['name'] = mb_convert_encoding($stat['name'], 'UTF-8', mb_detect_encoding($stat['name']));
                    $is_folder = preg_match('#/$#', $stat['name']);
                    $stat['name'] = preg_replace('#/$#', '', $stat['name']);

                    $arr = self::getStructure($stat['name'], $path, '', $stat['size'], $stat['mtime'],$is_folder?'dir':'file');

                    if ( !empty($inner_path) ){
                        if ( !strstr($arr[0], $inner_path.'/') ) continue;
                        $arr[0] = str_replace($inner_path.'/', '', $arr[0]);
                    }
                    if ( strstr($arr[0], '/') ) continue;
                    $obj->Result->{$is_folder ? 'Folders' : 'Files'}[] = $arr;
                }*/
                break;

            case 'tar':
                ob_start();
                passthru("tar -tf \"$archive_path\"");
                $files = explode(L_SEP, ob_get_clean());
                foreach ( $files as $file ){
                    if ( empty($file) ) continue;
                    $is_folder = preg_match('#/$#', $file);
                    $file = preg_replace('#/$#', '', $file);

                    $arr = self::getStructure($file, $path, '', 10, 0,$is_folder?'dir':'file');

                    if ( !empty($inner_path) ){
                        if ( !strstr($arr[0], $inner_path.'/') ) continue;
                        $arr[0] = str_replace($inner_path.'/', '', $arr[0]);
                    }
                    if ( strstr($arr[0], '/') ) continue;
                    $obj->Result->{$is_folder ? 'Folders' : 'Files'}[] = $arr;
                }
                break;
        }
        $obj->Success = true;
        return json_encode($obj);
    }

    public static function makeThumb(string $source, string $ext, int $size, string $mime): void
    {
        if ( strstr($mime, 'image') ) self::makeImageThumb($source, $ext, $size);
        if ( strstr($mime, 'video') ) self::makeVideoThumb($source, $ext, $size);
    }

    public static function makeImageThumb(string $source, string $ext, int $size): void
    {
        $_resampled = imagecreatetruecolor($size, $size);

        switch ( $ext ){
            case "jpg": case "jpeg": $_source = imagecreatefromjpeg($source); break;
            case "png": $_source = imagecreatefrompng($source); break;
            case "bmp": case "ico": $_source = imagecreatefrombmp($source); break;
            case "webp": $_source = imagecreatefromwebp($source); break;
            case "gif": $_source = imagecreatefromgif($source); break;
            case "tga": $_source = imagecreatefromtga($source); break;
            // case "heic": ; break;
            // case "av1": ; break;
            default: $_source = imagecreatefromstring( file_get_contents($source) );
        }

        if ( $_source ){
            $arr = getimagesize($source);
            $src_w = $arr[0];
            $src_h = $arr[1];

            if ( $src_w && $src_h )
                imagecopyresampled(
                    $_resampled, $_source,
                    0, 0, 0, 0,
                    $size, $size, $src_w, $src_h
                );
        }
        imagejpeg($_resampled, null, 80);
    }

    public static function makeVideoThumb(string $source, string $ext, int $size): void
    {
        if (IS_WIN) {
            $ffmpeg = "ffmpeg.exe";
        } elseif (IS_UNIX){
            $ffmpeg = "ffmpeg";
        }else{
            $ffmpeg = "";
        }

        if ($ffmpeg){
            $thumb = STORAGE . "tmp/tmp.jpg";
            $exec = APP ."vendor/$ffmpeg -i \"$source\" -ss 00:00:01.000 -frames:v 1 \"$thumb\"";
            exec($exec);
            if ( file_exists($thumb) ){
                $_resampled = imagecreatetruecolor($size, $size);
                $_source = imagecreatefromjpeg($thumb);

                $arr = getimagesize($thumb);
                $src_w = $arr[0];
                $src_h = $arr[1];

                if ( $src_w && $src_h )
                    imagecopyresampled(
                        $_resampled, $_source,
                        0, 0, 0, 0,
                        $size, $size, $src_w, $src_h
                    );

                unlink($thumb);
                imagejpeg($_resampled, null, 80);

            }else die($exec);

        }else die("OS not detected");
    }

    public static function clearTmp(): void
    {
        exec("rm -R \"../storage/tmp/*\"");
    }
}