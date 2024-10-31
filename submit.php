<?php

header('Content-Type: application/json; charset=utf-8');

$servername = "localhost";
$username = "u2873467_default";
$password = "RRatTB565cjRv7vK";
$dbname = "u2873467_default";

$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn, "utf8");

if ($conn->connect_error) {
    http_response_code(500); // Внутренняя ошибка сервера
    echo json_encode(["status" => "error", "message" => "Ошибка подключения к базе данных."]);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fio = $conn->real_escape_string($_POST['fio']);
    $track = $conn->real_escape_string($_POST['track']);
    $institution = $conn->real_escape_string($_POST['institution']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);

    $team_name = !empty($_POST['team_name']) ? $conn->real_escape_string($_POST['team_name']) : "no team";

    $sql = "INSERT INTO participants (fio, track, institution, email, phone, team_name)
            VALUES ('$fio', '$track', '$institution', '$email', '$phone', '$team_name')";
    
    if ($conn->query($sql) === TRUE) {
        http_response_code(200); // Успешный запрос
        echo json_encode(["status" => "success", "message" => "Данные успешно отправлены!"]);
    } else {
        http_response_code(500); // Внутренняя ошибка сервера
        echo json_encode(["status" => "error", "message" => "Ошибка: " . $conn->error]);
    }
    $conn->close();
} else {
    http_response_code(405); // Метод не разрешен
    echo json_encode(["status" => "error", "message" => "Недопустимый метод запроса."]);
}
?>
