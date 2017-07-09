<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "SELECT * FROM login WHERE email = '$data->email' and  password= '$data->password'";
$result = $conn->query($sql);
if ($result->num_rows == 1) {
  // correct login
if($data->name){
	$qry = $conn->query($sql);

}


 }else {

echo 'not sucss';
} 



$conn->close();
?>