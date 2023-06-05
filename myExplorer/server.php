<?php
require_once 'vendor/autoload.php';

use myExplorer\Request;
use myExplorer\FileManager;

const DS = DIRECTORY_SEPARATOR;
define('ROOT', dirname(__DIR__) . DS);
const DATA = ROOT .'data' .DS;
const APP = ROOT .'myExplorer' .DS;
const STORAGE = ROOT .'storage' . DS;

$path = Request::getPath();
$stateId = Request::get('stateId');
$fileName = Request::get('fileName');
$folder = str_replace(["[", "]:\\"], ["", DS], Request::get('path'));

if (in_array($path[1], ['ListFolder', 'ExpandFolder'])) {
    $data = Request::getInputJSON();
    $folder = str_replace(["[", "]:\\"], ["", DS], $data->path);
    preg_replace("/\\$/", "", $folder);
    $isRefresh = $data->isRefresh;
    echo FileManager::scan(DATA . $folder);
}

if ($path[1] == 'GetThumbnail') {
    if ($ext = FileManager::is_archive($folder)) {
        $parts = explode($ext, $folder);
        $archive_path = $parts[0] . $ext;
        $inner_path = preg_replace('#^/#', '', str_replace("\\", '/', $parts[1]));
        switch ($ext) {
            case 'zip':
                $zip = new ZipArchive();
                $zip->open(DATA . $archive_path);
                $folder = '../storage/tmp/';
                $fileName = $inner_path ? $inner_path . '/' . $fileName : $fileName;
                $zip->extractTo($folder, $fileName);
                break;

            /*case '7z':

            break;

            case 'rar':

            break;*/

            case 'tar':

                break;
        }
    }

    $arr = explode(".", $fileName);
    $ext = array_pop($arr);

    $size = Request::get('maxSize');
    $version = Request::get('version');

    $file = DATA . $folder . $fileName;
    $mime = mime_content_type($file);

    //header("Content-disposition: inline; filename='tmp.jpg'");
    //header("Cache-control: no-cache, no-store, must-revalidate");
    //header("Content-type: ". $mime);

    FileManager::makeThumb($file, $ext, $size, $mime);

    // clear tmp folder
}

if ($path[1] == 'Preview') {
    $previewerType = Request::get('previewerType');

    if ($previewerType == 'ImageViewer') {
        $url = "/server.php/GetImage";
        $url .= "?stateId=$stateId";
        $url .= "&path=" . Request::get('path');
        $url .= "&fileName=$fileName";
        // $url .= "&vary=635869814876079492";
        // $url .= "&sid-gt=qnpajz3zbzeulehvjhxh3nk5";

        $html = file_get_contents(APP . "/components/preview.html");
        echo str_replace("{{url}}", $url, $html);
    }

    if ($previewerType == 'MediaPlayer') {
        $file = DATA . $folder . $fileName;
        echo file_get_contents($file);
    }

    if ($previewerType == 'DocumentViewer') {
        echo file_get_contents($file);
    }
}

if ($path[1] == 'Download') {
    $file = DATA . $folder . $fileName;
    echo file_get_contents($file);
}

if ($path[1] == 'GetImage') {
    $file = DATA . $folder . $fileName;

    header("Content-disposition: inline; filename='$stateId'");
    header("Cache-control: no-cache, no-store, must-revalidate");
    header("Content-length: " . filesize($file));
    header("Content-type: " . mime_content_type($file));

    echo file_get_contents($file);
}

if ($path[1] == 'Logout') {
    setcookie('login','');
    setcookie('token','');
    header("Content-type: application/json");
    die( json_encode(['Success' => true, 'Result' => true]) );
}
