<?php
namespace myExplorer;

use stdClass;
use Exception;

class Request {
    public static stdClass $object;
    public static array $array;
    public static bool $isArray = false;

    public static array $path;
    public static string $action;
    public static string $stateId;
    public static string $folder;
    public static string $fileName;

    public static function get(string $name): string
    {
        return $_GET[$name] ?? '';
    }

    public static function post(string $name): string
    {
        return $_POST[$name] ?? '';
    }

    public static function cookie(string $name): string
    {
        return $_COOKIE[$name] ?? '';
    }

    public static function method(string $name): bool
    {
        return strtolower($_SERVER['REQUEST_METHOD']) == strtolower($name);
    }

    public static function decodeInputJson(bool $assoc = false): void
    {
        $input = trim( file_get_contents("php://input") );
        if ( $input && in_array($input[0], ['{', '[']) ){
            try {
                if ($assoc || $input[0] == '['){
                    self::$array = json_decode($input, true);
                    if ( is_array(self::$array) ) self::$isArray = true;
                }else{
                    self::$object = json_decode($input);
                    if ( self::$object instanceof stdClass ){
                        if (
                            property_exists(self::$object, 'path') &&
                            self::$object->path
                        ) {
                            self::$object->path = self::clearPath(self::$object->path);
                        }
                    }
                }

            }catch (Exception $e){
                self::$array = ["error" => "decode input as JSON"];
                self::$object = new stdClass();
            }
        }
    }

    public static function parsePath(): void
    {
        self::$path = explode("/", $_SERVER['PATH_INFO']);
        self::$action = self::$path[1] ?? '';

        // get
        self::$stateId = self::get('stateId');
        self::$folder = self::clearPath(self::get('path'));
        self::$fileName = self::get('fileName');
    }

    public static function isSet(string $entry, string $place): bool
    {
        return !empty( self::{$place}($entry) );
    }

    public static function clearPath(string $path): string
    {
        return str_replace(["[", "]:\\"], ["", DS], $path);
    }
}

Request::decodeInputJson();
Request::parsePath();