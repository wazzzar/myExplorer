<?php

namespace myExplorer\Repository;

use myExplorer\DB;

abstract class PublicLink
{

    static function checkTable(): void
    {
        $sql = "CREATE TABLE IF NOT EXISTS `public_links`
                (
                    `name`       TEXT,
                    `linked`     TEXT,
                    `created_by` INTEGER,
                    `hits`       INTEGER,
                    `hit_lim`    INTEGER,
                    `last_hit`   INTEGER,
                    `expiration` INTEGER,
                    `created`    INTEGER,
                    `modified`   INTEGER
                )";

        DB::query($sql);
    }
}