<?php
require_once "../vendor/autoload.php";

use myExplorer\Request;
use myExplorer\User;

$authorized = false;
if ( Request::method('post') && Request::post('loginFormSubmitButton') ){
    try {
        $authorized = User::login(Request::post('username'), Request::post('password'), Request::post('remember') == 'on');
    } catch (Exception $e) {
        echo $e->getMessage();
    }
    if ($authorized){
        header('Location: /');
        exit();
    }
}

if ( Request::method('get') && Request::cookie('login') && Request::cookie('token') ){
    try {
        $authorized = User::checkAuthorization(Request::cookie('login'), Request::cookie('token'));
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

if ($authorized){
    require_once 'myExplorer.php';
}else{
    require_once 'login.php';
}