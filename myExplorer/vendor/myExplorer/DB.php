<?php
namespace myExplorer;

use SQLite3;

class DB {
    static private $connection;
    static private $statement;

    static public function connect($host='', $user='', $pass='', $db=''){
        $db_file = "../storage/data.db";
        if ( !file_exists($db_file) ) touch($db_file);
        self::$connection = new SQLite3($db_file);
    }

    static public function select($sql, $fetch = SQLITE3_ASSOC){
        $result = self::$connection->query($sql);
        return $result->fetchArray($fetch);
    }

    static public function query($sql){
        $result = self::$connection->exec($sql);
        return [
            "result" => $result,
            "count" => self::$connection->changes()
        ];
    }

    /*static function batch($sql, $data){
        self::$statement = self::$connection->prepare($sql);
        foreach ( $data as $key => $val ) self::$statement->bindParam(':name', $name);
        $result = self::$statement->execute();
        return $result->fetchArray($fetch);
    }*/

}

DB::connect();