<?php
require_once '../vendor/autoload.php';

const DS = DIRECTORY_SEPARATOR;
define("OS", strtoupper(substr(PHP_OS, 0, 3)));
define('ROOT', dirname(__DIR__) . DS);
const DATA = ROOT .'data' .DS;
const APP = ROOT .'app' .DS;
const _PUBLIC_ = ROOT .'public' .DS;
const STORAGE = ROOT .'storage' . DS;
const TMP = STORAGE .'tmp' .DS;
const IS_UNIX = OS === 'LIN';
const IS_WIN = OS === 'WIN';
const L_SEP = IS_WIN ? "\r\n" : (IS_UNIX ? "\n" : "");

include 'server/user.php';
include 'server/fileManager.php';
include 'server/admin.php';