<?php
try {
  $servername = "localhost";
  $dbusername = "root";
  $dbpassword = "";
  $dbname = "dysdatabase";
  
  $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
} catch (\Throwable $th) {
  echo $th;
}
  
?>