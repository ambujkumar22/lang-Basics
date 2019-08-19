<?php
$mysqli = new mysqli('localhost','root','','login') or die(mysqli_error($mysqli));

if (isset($_POST["save"])) {
  $uname = $_POST["username"];
  $upass = $_POST["password"];
$mysqli->query("INSERT INTO logintest (username,password) VALUES ('$uname','$upass')") or die($mysqli->error);
}





?>
