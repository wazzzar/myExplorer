<?php

namespace myExplorer\Repository;

use myExplorer\DB;

abstract class Root
{

    static function checkTable(): void
    {
        $sql = "CREATE TABLE IF NOT EXISTS `roots`
                (
                    `name`     TEXT,
                    `location` TEXT,
                    `created`  INTEGER,
                    `modified` INTEGER
                )";

        DB::query($sql);
    }
}