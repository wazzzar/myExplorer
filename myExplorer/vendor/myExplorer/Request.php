<?php
namespace myExplorer;

class Request {

    public static function get($name){
        return isset($_GET[$name]) ? $_GET[$name] : '';
    }

    public static function post($name){
        return isset($_POST[$name]) ? $_POST[$name] : '';
    }

    public static function cookie($name){
        return isset($_COOKIE[$name]) ? $_COOKIE[$name] : '';
    }

    public static function getPath(){
        return explode("/", $_SERVER['PATH_INFO']);
    }

    public static function method($name){
        return strtolower($_SERVER['REQUEST_METHOD']) == strtolower($name);
    }

    public static function getInputJSON(){
        return json_decode(file_get_contents("php://input"));
    }

}