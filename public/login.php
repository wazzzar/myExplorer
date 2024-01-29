<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>myExplorer - authorization</title>

    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/=x-icon" href="favicon.ico">
    <link href="assets/css/page.css" rel="stylesheet">
</head>

<body>

<form method="post" action="/" id="formLogin">

    <div id="divLogin" style="position: absolute; visibility: visible; left: 40%; top: 10%;">
        <div class="gt-panel" style="padding: 5px">
            <table style="width: 280px;">
                <tbody>
                <tr>
                    <td colspan="2">
                        <table style="width: 280px;">
                            <tbody>
                            <tr>
                                <td style="text-align: center">
                                    <img style="border: none; width: 48px; height: 48px"
                                         src="assets/images/myExplorer48.png">
                                </td>
                                <td>Welcome to myExplorer<br>Please enter your credentials:</td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding-bottom: 5px">
                        <div class="gt-panel" style="height: 0px"></div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 120px;">User name:</td>
                    <td><input name="username" type="text" value="admin" style="width: 170px"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input name="password" type="password" value="" style="width: 170px"></td>
                </tr>
                <!--tr>
                    <td>Language:</td>
                    <td>
                        <select name="DropDownListLanguages" id="DropDownListLanguages" style="width: 175px">
                            <option value=""></option>
                        </select>
                    </td>
                </tr-->
                <tr>
                    <td><label for="remember">Remember me</label></td>
                    <td><input name="remember" type="checkbox">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: right">
                        <input name="loginFormSubmitButton" type="submit" value="Login" style="width: 100px;">
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</form>

<!-- script src="assets/js/login-combined.js"></script -->

</body>
</html>