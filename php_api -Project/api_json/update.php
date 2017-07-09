<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE shopes SET
name ='$data->name',  email ='$data->email'
WHERE shop_id = $data->shop_id ";
$qry = $conn->query($sql);
if($data->name){
}
$conn->close();
?>
