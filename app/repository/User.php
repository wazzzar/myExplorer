<?php

namespace myExplorer\Repository;

use myExplorer\DB;
use \Exception;

abstract class User
{

    static function checkTable(): void
    {
        $sql = "CREATE TABLE IF NOT EXISTS `users`
                (
                    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
                    `login` TEXT,
                    `pass` TEXT,
                    `full_name` TEXT DEFAULT '',
                    `is_admin` INTEGER DEFAULT 0,
                    `is_manager` INTEGER DEFAULT 0,
                    `login_count` INTEGER DEFAULT 0,
                    `last_login` INTEGER,
                    `created` INTEGER,
                    `modified` INTEGER,
                    `token` TEXT DEFAULT ''
                )";
        DB::query($sql);
    }

    /**
     * @throws Exception
     */
    static function find(string $login): array
    {
        if ( empty($login) ){
            throw new Exception(self::class .': trying to find user with empty login');
        }
        self::checkTable();
        return DB::select("SELECT * FROM `users` WHERE `login` = '$login'");
    }

    /**
     * @throws Exception
     */
    static function add(string $login, string $pass, int $is_admin = 0, int $is_manager = 0): array
    {
        if ( empty($login) || empty($pass) ){
            throw new Exception(self::class .': trying to add user with empty login or password');
        }
        self::checkTable();
        $date = date('Y-m-d H:i:s');
        $sql  = "INSERT INTO `users` ( `login`,  `pass`,  is_admin,  is_manager,  created)
                              VALUES ('$login', '$pass', $is_admin, $is_manager, $date)";
        return DB::query($sql);
    }

    /**
     * @throws Exception
     */
    static function updateLogin(int $user_id, string $token, string $date): array
    {
        if ( $user_id < 0 ){
            throw new Exception(self::class .': trying to update user login with invalid ID');
        }
        $sql = "UPDATE `users` SET
                    `token` = '$token',
                    `login_count` = `login_count`+1,
                    `last_login` = '$date'
                WHERE `id` = $user_id";
        return DB::query($sql);
    }

    /**
     * @throws Exception
     */
    static function updateLogout(string $login, string $token): array
    {
        if ( empty($login) ){
            throw new Exception(self::class .': trying to update user logout with empty login');
        }
        if ( ! self::find($login) ){
            throw new Exception(self::class .': user not found');
        }
        return DB::query("UPDATE `users` SET `token` = '' WHERE `login` = '$login' AND `token` = '$token'");
    }

}