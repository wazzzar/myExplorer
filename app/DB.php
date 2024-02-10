<?php
namespace myExplorer;

use SQLite3;
use myExplorer\Repository\User as UserRep;

class DB {
    static private SQLite3 $connection;
    //static private $statement;

    /**
     * @throws \Exception
     */
    static function connect(): bool
    {
        $db_file = STORAGE ."data.db";
        $create_admin = false;
        if ( !file_exists($db_file) ){
            touch($db_file);
            $create_admin = true;
        }
        self::$connection = new SQLite3($db_file);
        if ( $create_admin ){
            (new UserRep)->add('admin', 'admin', 1, 1);
        }
        return (bool)self::$connection;
    }

    static function select(string $sql, int $fetch = SQLITE3_ASSOC): array
    {
        $result = self::$connection->query($sql);
        $data = [];
        while ($fetched = $result->fetchArray($fetch)){
            $data[] = $fetched;
        }
        return $data;
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

try {
    DB::connect();
} catch (\Exception $e) {
    echo $e->getMessage();
}