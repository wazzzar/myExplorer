<?php
require_once "../vendor/autoload.php";
require_once 'defs.php';

use myExplorer\Request;
use myExplorer\User;
use Katzgrau\KLogger\Logger;

$logger = new Logger("../app/log");

$logged = false;
if ( Request::method('post') && Request::post('loginFormSubmitButton') ){
    try {
        setcookie('lang', Request::post('lang') ?: 'en', 0, '/');
        $login = Request::post('username');
        $remember_me = Request::post('remember') == 'on';
        $logger->info("trying to login user $login ($remember_me)");
        $logged = User::login($login, Request::post('password'), $remember_me);
    } catch (Exception $e) {
        $logger->error($e->getMessage());
    }
}

if ( Request::method('get') && Request::cookie('login') && Request::cookie('token') ){
    try {
        $login = Request::cookie('login');
        $logger->info("Check user credentials $login");
        $logged = User::checkAuthorization($login, Request::cookie('token'));
    } catch (Exception $e) {
        $logger->error($e->getMessage());
    }
}

if ($logged){
    $logger->info("Login successful");
    header('Location: /myExplorer.php');
}else{
    $logger->info("Login fault");
    header('Location: /login.php');
}
exit();