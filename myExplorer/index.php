<?php
require_once "vendor/autoload.php";

use myExplorer\Request;
use myExplorer\User;

$authorized = false;
if ( Request::method('post') && Request::post('loginFormSubmitButton') ){
    $authorized = User::authorize( Request::post('username'), Request::post('password'), Request::post('remember') );
}

if ( Request::method('get') ){
    $authorized = User::checkAuthorization( Request::cookie('login'), Request::cookie('token') );
}

if ($authorized){
    require_once 'myExplorer.php';
}else{
    require_once 'login.php';
}