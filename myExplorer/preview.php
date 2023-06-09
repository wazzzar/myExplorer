<!DOCTYPE html>
<html lang="en">
<head>
    <title>Image Viewer</title>
    <link href="assets/css/viewer.css" rel="stylesheet" />
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/viewer.js"></script>
    <script type="text/javascript">
        $(function() {
            $(".image").viewer({
                url: "data-original",
                navbar: false
            }).viewer("show");
        });
    </script>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            background-color: #e0e0e0;
        }
    </style>
</head>
<body><div><img class="image" src="" data-original="{{url}}" alt=""></div>
</body>
</html>