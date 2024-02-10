<?php
require_once '../vendor/autoload.php';
require_once 'defs.php';

use myExplorer\Request;
use myExplorer\FileManager;
use myExplorer\User;
use myExplorer\Repository\User as UserRep;

$logged = false;
try {
    $login = Request::cookie('login');
    if ($login){
        $user = (new UserRep)->find($login);
        if ($user){
            $logged = User::checkAuthorization($login, Request::cookie('token'));
        }
    }
} catch (Exception $e) {
    echo $e->getMessage();
}

if (!$logged){
    header('Location: /login.php');
    exit();
}
?>
<!DOCTYPE html>
<html class="x-viewport" id="ext-element-2" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

    <title>myExplorer</title>

    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/x-icon" href="favicon.ico">

    <link href="assets/library/ext/theme-gray/all1.css" rel="stylesheet">
    <link href="assets/library/ext/theme-gray/all2.css" rel="stylesheet">
    <script src="assets/library/ext.js"></script>

    <link href="assets/css/fileultimate.css" rel="stylesheet">
    <script src="assets/js/fileultimate.js"></script>

    <script src="assets/localization.js" charset="utf-8"></script>

    <link href="assets/css/default.bundle.css" rel="stylesheet">
    <script src="assets/js/default.bundle.js"></script>

    <!--script async="" src="assets/js/js"></script-->
</head>

<body>

<script>
    let headerConfig = {
        title: "myExplorer",
        userName: "<?=$user["login"]?>",
        userFullName: "<?=$user["full_name"]?>",
        isAdministrator: <?=boolval($user['is_admin'])?>,
        isGroupManager: <?=boolval($user['is_manager'])?>,
        handlerUrl: "/server.php"
    };
</script>

<script id="fileManager-loader">
    (function () {
        let config = {
            id: "fileManager",
            xclass: "StolenTech.FileUltimate.FileManager",
            resizable: false,
            resizeHandles: "s, e, se",
            displayMode: "Viewport",
            stateId: "f42jmy",
            sid: "eogo1kxfuavgfbymj3ezorkt",
            sidParameter: "sid-gt",
            handlerUrl: "/server.php",
            resourceBasePath: "/assets/",
            hash: "d833a182cf9df159c761ea10fa45fb0b",
            rootFolders: JSON.parse('<?=FileManager::getRoots()?>'),
            initialFolder: "first",
            viewLayout: "LargeIcons",
            clientEvents: {
                loading: "fileManagerLoading",
                loaded: "fileManagerLoaded"
            },
            fileUploaderConfig: {
                id: "fileManager-fileUploader",
                xclass: "StolenTech.FileUltimate.FileUploader",
                resizable: true,
                resizeHandles: "s, e, se",
                displayMode: "Window",
                windowOptions: {
                    modal: true,
                    maximizable: true,
                    resizeHandles: "all"
                },
                stateId: "yc5khu",
                sid: "eogo1kxfuavgfbymj3ezorkt",
                sidParameter: "sid-gt",
                handlerUrl: "/server.php",
                resourceBasePath: "/assets/",
                hash: "ab2575ba941a2c76a23a0233f38fbfd3",
                clientEvents: {},
                methods: "Html5,Silverlight,Flash,Html4",
                viewLayout: "LargeIcons",
                fileTypes: "*/",
                chunkSize: "2147483647 bytes",
                maxRequestSize: 2147483647,
                autoClose: true
            }
        };
        window.StolenTech = window.StolenTech || {};
        if (StolenTech.loaderReady)
            StolenTech.loaderReady(config);
        else {
            StolenTech.loaderQueue = StolenTech.loaderQueue || [];
            StolenTech.loaderQueue.push(config);
        }
    })();
</script>

</body>
</html>