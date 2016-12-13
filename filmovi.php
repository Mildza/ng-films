<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");

$db_hostname = 'localhost';
$db_username = 'milvuk64_film';
$db_password = 'mikirurk';
$db_database = 'milvuk64_film';

$conn = new mysqli($db_hostname, $db_username, $db_password, $db_database);
				// Check connection
				if ($conn->connect_error) {
				    die("Connection failed: " . $conn->connect_error);
				}
 //ORDER BY komentar DESC
$query = "SELECT * FROM filmovi ORDER BY komentar DESC";
$result = $conn->query($query) or die($conn->error.__LINE__);


$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"glumci":"'  . $rs["glumci"] . '",';
		$outp .= '"zanr":"'  . $rs["zanr"] . '",';
		$outp .= '"naziv":"'  . $rs["naziv"] . '",';
		$outp .= '"ocena":"'  . $rs["ocena"] . '",';
		$outp .= '"utisak":"'  . $rs["utisak"] . '",';
		$outp .= '"komentar":"'  . $rs["komentar"] . '",';
		$outp .= '"br_komentara":"'   . $rs["br_komentara"] . '"}';

}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
