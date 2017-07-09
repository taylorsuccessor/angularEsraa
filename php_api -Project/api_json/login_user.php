<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "SELECT * FROM login WHERE email = '$data->email' and  password= '$data->password'";
$result = $conn->query($sql);
if ($result->num_rows == 1) {
  // correct login
	echo '<script>window.alert("This correct")</script>';
    }
 else {
   // incorrect login
		echo '<script>window.alert("This not correct")</script>';
}

$conn->close();
?>