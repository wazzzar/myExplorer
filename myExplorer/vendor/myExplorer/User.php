<?php
namespace myExplorer;

use \Exception;

class User {

    private static function checkTable(): void
    {
        $sql  = "CREATE TABLE IF NOT EXISTS `users` (
                    `id` INTEGER PRIMARY KEY AUTOINCREMENT, `login` TEXT, `pass` TEXT,
                    `admin` INTEGER, `manager` INTEGER, `token` TEXT
                 )";
        DB::query($sql);
    }

    /**
     * @throws Exception
     */
    static function find(string $login): array
    {
        if ( empty($login) ){
            throw new Exception('trying to find user with empty login');
        }
        self::checkTable();
        return DB::select("SELECT * FROM `users` WHERE `login` = '$login'");
    }

    /**
     * @throws Exception
     */
    public static function add(string $login, string $pass, int $admin = 0, int $manager = 0): array
    {
        if ( empty($login) || empty($pass) ){
            throw new Exception('trying to add user with empty login or password');
        }
        self::checkTable();
        $sql  = "INSERT INTO `users` (`login`, `pass`, `admin`, `manager`)
                              VALUES ('$login', '$pass', $admin, $manager)";
        return DB::query($sql);
    }

    /**
     * @throws Exception
     */
    static function login(string $login, string $pass, bool $remember = false): bool
    {
        if ( empty($login) || empty($pass) ){
            throw new Exception('trying to login as user with empty login or password');
        }
        $user = self::find($login);
        if ($user["pass"] == $pass){
            $token = md5(date("Y-m-d H:i:s"));
            DB::query("UPDATE `users` SET `token` = '$token' WHERE `id` = $user[id]");
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
            throw new Exception('trying to check authorization of user with empty login or password');
        }
        $user = self::find($login);
        return ($user["token"] == $token);
    }

    /**
     * @throws Exception
     */
    static function logout(): void
    {
        if ( !Request::cookie('login') ){
            throw new Exception('cant logout user with empty login');
        }
        DB::query("UPDATE `users` SET `token` = '' WHERE `login` = '". Request::cookie('login') ."'");
        setcookie('login','');
        setcookie('token','');
        header("Content-type: application/json");
        die( json_encode(['Success' => true, 'Result' => true]) );
    }
}
