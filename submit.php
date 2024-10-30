<?php

$servername = "localhost";
$username = "u2873467_default";
$password = "RRatTB565cjRv7vK";
$dbname = "u2873467_default";

$conn = new mysqli($servername, $username, $password, $dbname);

mysqli_set_charset($conn, "utf8");

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fio = $conn->real_escape_string($_POST['fio']);
    $track = $conn->real_escape_string($_POST['track']);
    $institution = $conn->real_escape_string($_POST['institution']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);

    // Проверка поля team-name
    $team_name = !empty($_POST['team-name']) ? $conn->real_escape_string($_POST['team-name']) : "no team";

    $sql = "INSERT INTO participants (fio, track, institution, email, phone, team_name)
            VALUES ('$fio', '$track', '$institution', '$email', '$phone', '$team_name')";
    if ($conn->query($sql) === TRUE) {
        echo "Данные успешно отправлены!";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>
