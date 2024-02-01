<?php

namespace myExplorer\Repository;

use myExplorer\DB;

abstract class Setting
{

    static function checkTable(): void
    {
        $sql = "CREATE TABLE IF NOT EXISTS `settings`
                (
                    `user` INTEGER,
                    `json` TEXT
                )";

        DB::query($sql);
    }
}