<?php

use myExplorer\FileManager;
use myExplorer\Request;

if (in_array(Request::$action, ['ListFolder', 'ExpandFolder'])) {
    $folder = Request::$object->path;
    preg_replace("/\\$/", "", $folder);
    echo FileManager::scan(DATA . $folder);
}

if (Request::$action == 'GetThumbnail') {
    $clear_tmp = false;
    if ($ext = FileManager::isArchive(Request::$folder)) {
        $parts = explode($ext, Request::$folder);
        $archive_path = $parts[0] . $ext;
        $inner_path = preg_replace('#^/#', '', str_replace("\\", '/', $parts[1]));
        Request::$folder = '../storage/tmp/';
        Request::$fileName = $inner_path ? $inner_path . '/' . Request::$fileName : Request::$fileName;
        $clear_tmp = true;
        switch ($ext) {
            case 'zip':
                $zip = new ZipArchive();
                $zip->open(DATA . $archive_path);
                $zip->extractTo(TMP, Request::$fileName);
                break;

            case '7z':
                break;

            case 'rar':
                $rar = RarArchive::open(DATA . $archive_path);
                foreach ($rar->getEntries() as $entry) {
                    if ( preg_match("#". $entry->getName() ."#", Request::$fileName) )
                        $entry->extract(TMP, Request::$fileName);
                }
                break;

            case 'tar':
                exec("tar -xvf \"". DATA . $archive_path ."\" -C \"". Request::$folder ."\" \"". Request::$fileName ."\"");
                break;
        }
    }

    $arr = explode(".", Request::$fileName);
    $ext = array_pop($arr);

    $size = Request::get('maxSize');
    //$version = Request::get('version');

    $file = DATA . Request::$folder . Request::$fileName;
    $mime = mime_content_type($file);

    //header("Content-disposition: inline; filename='tmp.jpg'");
    //header("Cache-control: no-cache, no-store, must-revalidate");
    //header("Content-type: ". $mime);

    FileManager::makeThumb($file, $ext, $size, $mime);
    if ($clear_tmp) FileManager::clearTmp();
}

if (Request::$action == 'Preview') {
    $previewerType = Request::get('previewerType');

    if ($previewerType == 'ImageViewer') {
        $url = "/server.php/GetImage";
        $url .= "?stateId=". Request::$stateId;
        $url .= "&path=" . Request::get('path');
        $url .= "&fileName=". Request::$fileName;
        // $url .= "&vary=635869814876079492";
        // $url .= "&sid-gt=qnpajz3zbzeulehvjhxh3nk5";

        $html = file_get_contents(_PUBLIC_ . "preview.php");
        echo str_replace("{{url}}", $url, $html);
    }

    if ($previewerType == 'MediaPlayer') {
        $file = DATA . Request::$folder . Request::$fileName;
        echo file_get_contents($file);
    }

    if ($previewerType == 'DocumentViewer') {
        $file = DATA . Request::$folder . Request::$fileName;
        echo file_get_contents($file);
    }
}

if (Request::$action == 'Download') {
    $file = DATA . Request::$folder . Request::$fileName;

    header("Content-disposition: download; filename='". Request::$fileName ."'");
    header("Cache-control: no-cache, no-store, must-revalidate");
    header("Content-length: " . filesize($file));
    header("Content-type: octet-stream");

    echo file_get_contents($file);
}

if (Request::$action == 'GetImage') {
    $file = DATA . Request::$folder . Request::$fileName;

    header("Content-disposition: inline; filename='". Request::$stateId ."'");
    header("Cache-control: no-cache, no-store, must-revalidate");
    header("Content-length: " . filesize($file));
    header("Content-type: " . mime_content_type($file));

    echo file_get_contents($file);
}