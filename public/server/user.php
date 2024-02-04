<?php
/**  */

use myExplorer\Request;
use myExplorer\User;

if (Request::$action == 'Logout') {
    try {
        User::logout();
    }catch (Exception $e){
        echo $e->getMessage();
    }
}