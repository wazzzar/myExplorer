<!DOCTYPE html>
<html lang="en">
<head>
    <title>
        About myExplorer
    </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="assets/css/page.css" rel="stylesheet">
    <script src="assets/js/common.js"></script>

</head>

<body class="selectable">
<form method="post" action="aboutdialog.php" id="form1">
    <div class="aspNetHidden">
        <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
               value="ciri1KdCWSEp9AAps+18oQPSKMHacy/bTSmenVdGQNstRwBoaG3248IoPuigGTsWGo+2lBB4uQfzRu5joGQUD5FzZpWOyocFUFR40CtF81CnJ3vy0pkiBHFcrjGNxgcdQwJMkXL9OiRDljFOrWVLJY3gpuqlRNScS7+bSANSvtzdLymtGFdc/NfNeFzXT8Vn7tlWiBY71AW2Ftm1ZgUmkPYXh2iXDmIuR1dJkloBBN4ECTuxNR0NcN7q+tJYJDiLoFXg8DuZQkI23zAsBLSowou5gDVQHM7QS6rfBql/BOATamHFNmuWkaZpA48tq+qESwvQ7MqBMuDPhL9C9bxVlWVEJ2H+/ERLd1chMkozRAFvxplGinVJJOcydpdkPtkiI3blI6a06nikn3xTpvjQuPqjSh8zxFwn7TiyjmONVW5etrQBxuxlZxS9QHzswVPleR2o6XQns3nVnAY0tVMPeRWXHsgqoc5NrtFu42+xtk2mUXEW/2PLrw/ido4cV6HBbEhOS8tfms3aBdRJYrSGo51CQwtuvE5AqPwerQQ+4oq8TYdiiRAC3t203CxDAIrx2NRyqNCrc6Auhz/NjZ2MX3syuEbk/jm4mqw6qU1MCz8c95W8JBW4Xntq3g8g6Sk+1zjvwp2Sk3gLz2PyyHm9ISmYSjdZtHd4sFwycNEelEOhMct6sZKUre75OsYEm23/p0q3diJ4p36g7g+/aZHL24ISwVFiq4FtynwhiIwD3skoHQEsnlGQvwy6LHsKYZQA"/>
    </div>

    <div class="aspNetHidden">

        <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="A8BD3C32"/>
        <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
               value="bED9IOm3MBF/BT/2dO1khoeJw7Q8Fo59WZ/ouaLZSIj7rqIIT624X6RJW2LvCgHXCABVWk/Xp1//AXX29H53iM8/Mw7kV+Yf2+mjF8/vToClatBXUr0utHucR0faKI4O"/>
    </div>
    <table cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td style="vertical-align: top">
                <img src="assets/images/myExplorer128.png"
                     style="margin-right: 20px"/>
            </td>
            <td>
                <h1><span id="Product">myExplorer</span></h1>
                <span style="font-weight: bold">Version <span id="Version">1.0.0.0</span></span>
                <br/><span id="Copyright">Copyright © 2023-<?=date('Y')?> StolenTech</span>
                <br/>All rights reserved.
                <br/><a href="https://www.StolenTech.com/myExplorer"
                        target="_blank">https://www.StolenTech.com/myExplorer</a>
            </td>
        </tr>
    </table>
    <hr style="margin-top: 20px; margin-bottom: 20px"/>
    <table cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td style="width: 120px">Build Date:</td>
            <td>
                <span id="BuildDate"><?=date('r')?></span>
            </td>
        </tr>
        <tr>
            <td>Database Version:</td>
            <td>
                <span id="DatabaseVersion">1.0.0</span>

            </td>
        </tr>
        <tr>
            <td>License Version:</td>
            <td>
                <span id="LicenseVersion">1.0</span>
            </td>
        </tr>
        <tr>
            <td>Operating System:</td>
            <td><span id="OperatingSystem"><?=PHP_OS?></span></td>
        </tr>
        <tr>
            <td>Process Memory:</td>
            <td><span id="ProcessMemory"><?=ini_get('memory_limit')?> (64-bit)</span></td>
        </tr>
        <tr>
            <td>Programming Language:</td>
            <td><span id="Framework">PHP 7.4</span></td>
        </tr>
    </table>
    <div class="gt-formBottom"><input type="submit" name="ButtonOK" value="OK"
                                      onclick="elementDialog.close(); return false;" id="ButtonOK" style="width: 80px"/>
    </div>
</form>
</body>
</html>
