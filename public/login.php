<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>myExplorer - login page</title>

        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
        <link rel="icon" type="image/=x-icon" href="favicon.ico">
        <link href="assets/css/page.css" rel="stylesheet">
        <link href="assets/css/login.css" rel="stylesheet">
    </head>

    <body>
        <form method="post" action="/" id="formLogin">
            <div id="divLogin">
                <div class="gt-panel">
                    <table>
                        <tbody>
                            <tr>
                                <td colspan="2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="assets/images/myExplorer48.png" alt="logo">
                                                </td>
                                                <td>Welcome to myExplorer<br>Please enter your credentials:</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"><hr></td>
                            </tr>
                            <tr>
                                <td><label for="name">User name:</label></td>
                                <td><input id="name" name="username" type="text"></td>
                            </tr>
                            <tr>
                                <td><label for="pass">Password:</label></td>
                                <td><input id="pass" name="password" type="password"></td>
                            </tr>
                            <!--tr>
                                <td>Language:</td>
                                <td>
                                    <select name="DropDownListLanguages" id="DropDownListLanguages">
                                        <option value=""></option>
                                    </select>
                                </td>
                            </tr-->
                            <tr>
                                <td><label for="remember">Remember me</label></td>
                                <td><input id="remember" name="remember" type="checkbox">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input name="loginFormSubmitButton" type="submit" value="Login">
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