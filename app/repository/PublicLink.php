<?php

namespace myExplorer\Repository;

use myExplorer\Repository;

class PublicLink extends Repository
{
    public function __construct()
    {
        parent::__construct();
        $this->table = 'public_links';
        $this->definition = "
            `id`         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            `name`       TEXT,
            `linked`     TEXT,
            `created_by` INTEGER DEFAULT 0,
            `hits`       INTEGER DEFAULT 0,
            `hit_lim`    INTEGER DEFAULT 10,
            `last_hit`   TEXT,
            `expiration` TEXT,
            `created`    TEXT,
            `modified`   TEXT
        ";
    }
}