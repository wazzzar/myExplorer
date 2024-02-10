<?php

namespace myExplorer;
require_once '../public/defs.php';

class Lang
{
    private array $entries;
    public function __construct(string $lang = 'en')
    {
        $file = APP .'lang'.DS.$lang.'.php';
        if (file_exists($file)){
            $this->entries = require_once $file;
        }
    }

    public function get(string $entry = ''): string
    {
        if (key_exists($entry, $this->entries)){
            return $this->entries[$entry];
        }
        return $entry;
    }
}