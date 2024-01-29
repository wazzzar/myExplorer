<!DOCTYPE html>
<html lang="en">
<head>
    <title>
        myExplorer - Administration
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes" /><link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /><link rel="icon" type="image/x-icon" href="favicon.ico" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="assets/css/administration-combined.css" rel="stylesheet">
    <script src="assets/js/administration-combined.js"></script>
    <script src="assets/language.js?display=en&amp;format=en-US" charset="utf-8"></script>
</head>

<body>
<div id="pageHeader" class="gt-pageHeader gt-nonSelectableText">
    <span style="float: left;">myExplorer - Administration</span>
    <div id="userInfo" class="gt-textButton" style="float: right" title="Logged in as admin">
        <span class="gt-user-image"></span><span>Administrator</span><span class="gt-menudown-image"></span>
    </div>
</div>
<script>
    var administrationPage = new StolenTech.myExplorer.AdministrationPage({
        ElementId: "administrationPage",
        Language: "en",
        ResourceBasePath: "/assets/",
        FileUltimateResourceBasePath: "/myExplorer/resource.ashx/638179241860000000/old/",
        ActionBasePath: "/server.php/",
        IsGroupManager: false,
        Sections: [["Users", "1"], ["Groups", "2"], ["Root Folders", "3"], ["Events", "4"], ["Public Links", "6"]],
        ManagedGroups: [],
        EventNames: {"1":"Login","2":"Logout","4":"Failure","8":"Browse","16":"Create","32":"Delete","64":"Rename","128":"Copy","256":"Move","512":"Compress","1024":"Extract","2048":"Upload","4096":"Download","8192":"PublicLink","16384":"Preview"},
        EventIcons: {"1":"login.png","2":"logout.png","4":"failure.png","8":"explore.png","16":"newfolder.png","32":"delete.png","64":"rename.png","128":"copy.png","256":"cut.png","512":"compress.png","1024":"extractall.png","2048":"upload.png","4096":"download.png","8192":"publiclink.png","16384":"preview.png"}
    });
</script>
</body>
</html>
