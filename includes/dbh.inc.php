<?php

    $dsn = "mysql:host=localost;dbname=myfirstdatabase";
    $dbusername = "root";
    $dbpassword = "";

    try {
        $pdo = new PDO($dsn, $dbusername, $dbpassword);
        $pdo->setArttibute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (PDOExeption $e) {
        echo "Connection failed: " . $e->getMessage();
    }