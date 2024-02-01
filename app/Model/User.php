<?php

namespace myExplorer\Model;

use myExplorer\Model;

class User extends Model
{
    private int $id;
    private string $login;
    private string $full_name;
    private int $is_admin;
    private int $is_manager;

    public function __construct(array $data)
    {
        self::assignData($this, $data);
    }
}