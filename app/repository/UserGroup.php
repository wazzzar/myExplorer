<?php

namespace myExplorer\Repository;

use myExplorer\DB;

abstract class UserGroup
{

    static function checkTable(): void
    {
        $sql = "CREATE TABLE IF NOT EXISTS `user_groups`
                (
                    `name`     TEXT,
                    `members`  TEXT,
                    `created`  INTEGER,
                    `modified` INTEGER
                )";

        DB::query($sql);
    }
}