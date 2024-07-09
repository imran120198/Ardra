<?php
$servername = "mysql-c254f03-ik048941-8f3f.i.aivencloud.com";
$username = "avnadmin";
$password = "AVNS_aJGOD7C1sZ99Vkh1fwz";
$dbname = "ardra_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
