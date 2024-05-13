<?php 
include "connection.php";
error_reporting(E_ERROR | E_PARSE);


if(isset($_POST["submit"]) && isset($_POST["agree"]))
    $name = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];

    if($name != "" && $email != ""&& $password != ""&& $password2 != ""){
        if($password === $password2){
            $sql = "INSERT INTO user (name, email, password)
            VALUES ('$name', '$email', '$password')";
            if ($conn->query($sql) === TRUE) {
                echo "user created succesfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }
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
        <h1>Sign Up</h1>
        <div>
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" require>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" require>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" require> 
        </div>
        <div>
            <label for="password2">Confirm Password:</label>
            <input type="password" name="password2" id="password2" require>
        </div>
        <div>
            <label for="agree">
                <input type="checkbox" name="agree" id="agree" value="yes"/> I agree
                with the
                <a href="#" title="term of services">term of services</a>
            </label>
        </div>
        <button type="submit" name="submit">Register</button>
        <footer>Already a member? <a href="login.php">Login here</a></footer>
    </form>
</main>
</body>
</html>
</html>