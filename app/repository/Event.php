<?php

namespace myExplorer\Repository;

use myExplorer\Repository;

class Event extends Repository
{
    const TYPE_LOGIN = 1;
    const TYPE_LOGOUT = 2;

    const TYPES = [
        self::TYPE_LOGIN => 'Login',
        self::TYPE_LOGOUT => 'Logout'
    ];
    function __construct()
    {
        parent::__construct();
        $this->table = 'events';
        $this->definition = "
            `id`   INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            `type` INTEGER,
            `date` TEXT,
            `time` TEXT,
            `user` TEXT
        ";
    }
}
