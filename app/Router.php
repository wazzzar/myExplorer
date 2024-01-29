<?php
namespace myExplorer;

class Router {
    private static array $path;

    public static function getRoute(): array
    {
        self::$path = explode("/", $_SERVER["REQUEST_URI"]);
        return self::$path;
    }

    public static function toRoute(string $route = "/"): void
    {
        header("Location: $route"); die();
    }
}