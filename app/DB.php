<?php
namespace myExplorer;

use SQLite3;

class DB {
    static private SQLite3 $connection;
    //static private $statement;

    static function connect(): bool
    {
        $db_file = "../storage/data.db";
        $create_admin = false;
        if ( !file_exists($db_file) ){
            touch($db_file);
            $create_admin = true;
        }
        self::$connection = new SQLite3($db_file);
        if ( $create_admin ){
            User::add('admin', 'admin', 1, 1);
        }
        return (bool)self::$connection;
    }

    static function select(string $sql, int $fetch = SQLITE3_ASSOC): array
    {
        $result = self::$connection->query($sql);
        return $result->fetchArray($fetch);
    }

    static function query(string $sql): array
    {
        $result = self::$connection->exec($sql);
        return [
            "result" => $result,
            "count" => self::$connection->changes()
        ];
    }

    /*
    static private $prepared;
    static function prepare($sql): bool
    {
        self::$prepared = self::$connection->prepare($sql);
        return self::$prepared ? true : false;
    }

    static function exec($data){
        foreach ( $data as $key => $val ) self::$prepared->bindParam(":$key", $val);
        $result = self::$prepared->execute();
        return $result->fetchArray($fetch);
    }
    */

}

DB::connect();