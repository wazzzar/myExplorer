<?php
namespace myExplorer;

use \Exception;
use Katzgrau\KLogger\Logger;
use myExplorer\Repository\User as UserRep;

class User {

    /**
     * @throws Exception
     */
    static function login(string $login, string $pass, bool $remember = false): bool
    {
        if ( empty($login) || empty($pass) ){
            throw new Exception(self::class .': trying to login with empty login or password');
        }
        $user = UserRep::find($login);
        if ($user && $user["pass"] == $pass){
            $date = date("Y-m-d H:i:s");
            $token = md5($date);
            UserRep::updateLogin($user['id'], $token, $date);
            $time = time() + ($remember ? 24 * 3600 : 600); // на 24 часа или на 10 минут
            setcookie("login", $login, $time);
            setcookie("token", $token, $time);
            return true;
        }
        return false;
    }

    /**
     * @throws Exception
     */
    static function checkAuthorization(string $login, string $token): bool
    {
        if ( empty($login) || empty($token) ){
            throw new Exception(self::class .': trying to check authorization with empty login or password');
        }
        $user = UserRep::find($login);
        return ($user && $user["token"] == $token);
    }

    /**
     * @throws Exception
     */
    static function logout(): void
    {
        if ( !Request::cookie('login') ){
            throw new Exception(self::class .': cant logout with empty login');
        }
        UserRep::updateLogout(Request::cookie('login'), Request::cookie('token'));
        setcookie('login','');
        setcookie('token','');
        header("Content-type: application/json");
        die( json_encode(['Success' => true, 'Result' => true]) );
    }
}
