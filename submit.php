<?php

$servername = "localhost"; 
$username = "root";        
$password = "hackathon";   
$dbname = "participants"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fio = $conn->real_escape_string($_POST['fio']);
    $track = $conn->real_escape_string($_POST['track']);
    $institution = $conn->real_escape_string($_POST['institution']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $participation_format = $conn->real_escape_string($_POST['participation_format']);
    $sql = "INSERT INTO participants (fio, track, institution, email, phone, participation_format) 
            VALUES ('$fio', '$track', '$institution', '$email', '$phone', '$participation_format')";
    if ($conn->query($sql) === TRUE) {
        echo "Данные успешно отправлены!";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>