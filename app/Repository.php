<?php

namespace myExplorer;

class Repository
{
    protected string $table = '';
    protected string $definition = '';

    function __construct()
    {

    }

    function checkTable(): void
    {
        DB::query("CREATE TABLE IF NOT EXISTS `". $this->table ."` (". $this->definition .")");
    }

    function getRecord($id): array
    {
        self::checkTable();
        return DB::select("SELECT * FROM `". $this->table ."` WHERE `id` = $id");
    }
    function getRecords(): array
    {
        self::checkTable();
        return DB::select("SELECT * FROM `". $this->table ."`");
    }

}