<?php 
include "connection.php";
error_reporting(E_ERROR | E_PARSE);


if(isset($_POST["submit"]))
    $email = $_POST["email"];
    $password = $_POST['password'];

    if($email != ""&& $password != ""){
        
        $sql = "SELECT user_ID, name FROM user WHERE email = '$email' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["user_ID"]. " - Name: " . $row["name"]. "<br>";
        }
        } else {
        echo "0 results";
        }
        
    }
    
    

    echo $name;

    $conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<main>
    <form method="POST">
        <h1>Sign In</h1>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" require>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" require> 
        </div>
        <button type="submit" name="submit">Login</button>
        <footer>Not a member? <a href="../php/register.php">Register here</a></footer>
    </form>
</main>
</body>
</html>
</html>