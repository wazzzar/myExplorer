<?php

namespace myExplorer\Repository;

use myExplorer\Repository;

class UserGroup extends Repository
{

    public function __construct()
    {
        parent::__construct();
        $this->table = 'user_groups';
        $this->definition = "
            `id`          INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            `name`        TEXT,
            `description` TEXT,
            `members`     INTEGER DEFAULT 0,
            `created`     TEXT,
            `modified`    TEXT
        ";
    }
}