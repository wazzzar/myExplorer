<?php
namespace myExplorer;

class Router {
    private static $path;

    public static function getRoute(){
        self::$path = explode("/", $_SERVER["REQUEST_URI"]);
        return self::$path;
    }

    public static function toRoute($route = "/"){
        header("Location: $route"); die();
    }

    public static function handle(){
        self::getRoute();
        switch ( self::$path[1] ){
            case 'login': require_once "login.php"; break;
        }
    }
}