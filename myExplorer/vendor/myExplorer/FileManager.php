<?php
namespace myExplorer;

use \stdClass;
use \ZipArchive;

class FileManager {

    public static function getRoots($path){
        $files = scandir($path);
        $tree = [];
        foreach ( $files as $file ){
            $place = $path ."/". $file;
            if ( in_array($file, [".", ".."]) || !is_dir( $place ) ) continue;
            $tree[] = [
                $file,
                disk_free_space(DATA . $place),
                $path,
                true,
                md5($place)
            ];
        }
        return json_encode($tree);
    }

    public static function scan($path){
        $obj = new stdClass();
        $obj->Success = false;
        $obj->Result = new stdClass();
        $obj->Result->Folders = [];
        $obj->Result->Files = [];

        if ( $ext = self::is_archive($path) ) $json = self::scanArchive($path, $ext, $obj);
        //if ( is_file($path) &&  )
        if ( is_dir($path) ) $json = self::scanDir($path, $obj);
        return $json;
    }

    public static function is_archive($path){
        preg_match('#\.(zip|7z|rar|tar)#', $path, $matches);
        return array_pop($matches);
    }

    public static function scanDir($path, &$obj){
        foreach ( scandir($path) as $file ){
            $place = $path ."/". $file;
            if ( in_array($file, [".", ".."]) ) continue;
            if ( is_dir( $place ) ) {
                $obj->Result->Folders[] = [
                    $file,
                    disk_free_space($place),
                    null,
                    true,
                    null,
                    date("Y-m-d\TH:i:s.u\Z", filemtime($place))
                ];
            }
            if ( is_file( $place ) ) {
                $obj->Result->Files[] = [
                    $file,
                    filesize($place),
                    null,
                    date("Y-m-d\TH:i:s.u\Z", filemtime($place))
                ];
            }
        }
        $obj->Success = true;
        return json_encode($obj);
    }

    public static function scanArchive($path, $ext, &$obj){
        $parts = explode($ext, $path);
        $archive_path = $parts[0].$ext;
        $inner_path = preg_replace('#^/#', '', str_replace("\\", '/', $parts[1]));
        switch ($ext){
            case 'zip':
                $zip = new ZipArchive();
                $zip->open($archive_path);
                for ($i = 0; $i < $zip->numFiles; $i++) {
                    $stat = $zip->statIndex($i);
                    //$stat['name'] = mb_convert_encoding($stat['name'], 'UTF-8', mb_detect_encoding($stat['name']));
                    $is_folder = preg_match('#/$#', $stat['name']);
                    $stat['name'] = preg_replace('#/$#', '', $stat['name']);

                    $arr = $is_folder ? [
                        $stat['name'],
                        null,
                        null,
                        true,
                        null
                    ] : [
                        $stat['name'],
                        $stat['size'],
                        null
                    ];
                    $arr[] = date("Y-m-d\TH:i:s.u\Z", $stat['mtime']);

                    if ( !empty($inner_path) ){
                        if ( !strstr($arr[0], $inner_path.'/') ) continue;
                        $arr[0] = str_replace($inner_path.'/', '', $arr[0]);
                        if ( strstr($arr[0], '/') ) continue;
                        $arr[0] = str_replace('/', '', $arr[0]);
                        $obj->Result->{$is_folder ? 'Folders' : 'Files'}[] = $arr;
                    }else{
                        if ( strstr($arr[0], '/') ) continue;
                        $arr[0] = str_replace('/', '', $arr[0]);
                        $obj->Result->{$is_folder ? 'Folders' : 'Files'}[] = $arr;
                    }
                }
                break;

            /*case '7z':
                break;

            case 'rar':
                break;*/

            case 'tar':
                break;
        }
        $obj->Success = true;
        return json_encode($obj);
    }

    public static function makeThumb($source, $ext, $size, $mime){
        if ( strstr($mime, 'image') ) self::makeImageThumb($source, $ext, $size);
        if ( strstr($mime, 'video') ) self::makeVideoThumb($source, $ext, $size);
    }

    public static function makeImageThumb($source, $ext, $size){
        $_resampled = imagecreatetruecolor($size, $size);
        $_source = null;

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

    public static function makeVideoThumb($source, $ext, $size){
        $OS = strtoupper(substr(PHP_OS, 0, 3));
        if ($OS === 'WIN') {
            $ffmpeg = "ffmpeg.exe";
        } elseif ($OS === 'LIN'){
            $ffmpeg = "ffmpeg";
        }

        $thumb = STORAGE . "tmp/tmp.jpg";
        $exec = APP ."vendor/$ffmpeg -i \"$source\" -ss 00:00:01.000 -frames:v 1 \"$thumb\"";
        exec($exec);

        if ( $ffmpeg && file_exists($thumb) ){
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
    }
}