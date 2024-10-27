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
    $sql = "INSERT INTO participants (fio, track, institution, email, phone)
            VALUES ('$fio', '$track', '$institution', '$email', '$phone')";
    if ($conn->query($sql) === TRUE) {
        echo "Данные успешно отправлены!";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>
