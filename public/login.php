<?php
require_once "../vendor/autoload.php";
require_once 'defs.php';
use myExplorer\Lang;
use myExplorer\Request;
$lang = Request::cookie('lang') ?: 'en';
$Lang = new Lang($lang);

$langs = scandir(APP .'lang');
array_shift($langs);
array_shift($langs);
?><!DOCTYPE html>
<html lang="<?=$lang?>">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>myExplorer - <?=$Lang->get('login_title')?></title>

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
                                                <td><?=$Lang->get('login_form_title')?>:</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"><hr></td>
                            </tr>
                            <tr>
                                <td><label for="name"><?=$Lang->get('login_form_name')?>:</label></td>
                                <td><input id="name" name="username" type="text"></td>
                            </tr>
                            <tr>
                                <td><label for="pass"><?=$Lang->get('login_form_pass')?>:</label></td>
                                <td><input id="pass" name="password" type="password"></td>
                            </tr>
                            <tr>
                                <td><label for="lang"><?=$Lang->get('login_form_lang')?>:</label></td>
                                <td>
                                    <select name="lang" id="lang">
                                        <?php foreach ($langs as $lang){ ?>
                                        <option value="<?=str_replace('.php', '' , $lang)?>">
                                            <?=str_replace('.php', '' , $lang)?>
                                        </option>
                                        <?php } ?>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="remember"><?=$Lang->get('login_form_remember')?></label></td>
                                <td><input id="remember" name="remember" type="checkbox">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input name="loginFormSubmitButton" type="submit" value="<?=$Lang->get('login_form_submit')?>">
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