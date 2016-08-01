<?php

class db
{
    const HOST = 'localhost';
    const DBNAME = 'spenders';
    const USER = 'bcms';
    const PASSWORD = '123456';

    private static $db = null;

    protected function init()
    {
        if (self::$db) {
            return self::$db;
        }
        try {
//            self::$db = new mysqli('localhost', 'bcms61', '123456', 'spenders');
            self::$db = new PDO("mysql:host=localhost;dbname=spenders", 'bcms', '123456');
            self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            error_log($e, 3, LOGFILE);
            die();
        }

        return self::$db;
    }
}