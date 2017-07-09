<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO shopes (name, email)
VALUES ('$data->name', '$data->email')";
if($data->name){
	$qry = $conn->query($sql);
}
$conn->close();
?>