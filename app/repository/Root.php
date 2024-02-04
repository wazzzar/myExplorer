<?php

namespace myExplorer\Repository;

use myExplorer\Repository;

class Root extends Repository
{
    public function __construct()
    {
        parent::__construct();
        $this->table = 'roots';
        $this->definition = "
            `id`          INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            `name`        TEXT,
            `description` TEXT,
            `location`    TEXT,
            `created`     TEXT,
            `modified`    TEXT
        ";
    }
}