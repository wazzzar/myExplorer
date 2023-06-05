<?php
namespace myExplorer;

class User {

    static function checkTable(){
        $sql  = "CREATE TABLE IF NOT EXISTS `users` (
                    `id` INTEGER PRIMARY KEY AUTOINCREMENT, `login` TEXT, `pass` TEXT,
                    `admin` INTEGER, `manager` INTEGER, `token` TEXT
                 )";
        return DB::query($sql);
    }

    static function find($login){
        self::checkTable();
        return DB::select("SELECT * FROM `users` WHERE `login` = '$login'");
    }

    static function add($login, $pass, $admin = 0, $manager = 0){
        self::checkTable();
        $sql  = "INSERT INTO `users` (`login`, `pass`, `admin`, `manager`)
                              VALUES ('$login', '$pass', $admin, $manager)";
        return DB::query($sql);
    }

    static function authorize($login, $pass, $remember = null){
        $user = self::find($login);
        if ( is_array($user) && $user["pass"] == $pass ){
            $token = md5(date("Y-m-d H:i:s"));
            DB::query("UPDATE `users` SET `token` = '$token' WHERE `id` = $user[id]");
            $time = time() + ($remember ? 24 * 3600 : 600); // на 24 часа или на 10 минут
            setcookie("login", $login, $time);
            setcookie("token", $token, $time);
            return true;
        }
        return false;
    }

    static function checkAuthorization($login, $token){
        $user = self::find($login);
        return (is_array($user) && $user["token"] == $token);
    }
}
