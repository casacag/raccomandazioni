<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root@localhost"; 
$password = "password"; 
$dbname = "viaggi_db";  

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

$tipo_vacanza = $_GET['tipo_vacanza'];
$sql = "SELECT immagine_url, didascalia, link FROM viaggi WHERE tipo_vacanza = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $tipo_vacanza);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>
