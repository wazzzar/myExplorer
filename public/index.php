<?php
require_once "../vendor/autoload.php";

const DS = DIRECTORY_SEPARATOR;

use myExplorer\Request;
use myExplorer\User;

$logged = false;
if ( Request::method('post') && Request::post('loginFormSubmitButton') ){
    try {
        $logged = User::login(Request::post('username'), Request::post('password'), Request::post('remember') == 'on');
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

if ( Request::method('get') && Request::cookie('login') && Request::cookie('token') ){
    try {
        $logged = User::checkAuthorization(Request::cookie('login'), Request::cookie('token'));
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

if ($logged){
    header('Location: /myExplorer.php');
}else{
    header('Location: /login.php');
}
exit();