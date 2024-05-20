<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bookstore";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$title = $_POST['title'];
$author = $_POST['author'];
$genre = $_POST['genre'];
$published_date = $_POST['published_date'];

$sql = "INSERT INTO books (title, author, genre, published_date) VALUES ('$title', '$author', '$genre', '$published_date')";

if ($conn->query($sql) === TRUE) {
    echo "New book added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
