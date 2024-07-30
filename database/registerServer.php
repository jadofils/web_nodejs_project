<?PHP
session_start();
// Include the connection and validation logic here
include('./connection.php');

// Your validation logic
$isvalid = false;
$msg = '';

if (isset($_POST['submit'])) {
    // echo var_dump($_POST);
    $username = $_POST['username'];
    $email = $_POST['email'];
    $pass1 = $_POST['password'];
    $pass2 = $_POST['password2'];
echo var_dump($_POST);
    if (empty($username)) {
        $msg = 'Username is required!!';
        $isvalid = true;
    } else if (empty($email)) {
        $msg = 'Email is required!!';
        $isvalid = true;
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $msg = 'Invalid email format!!';
        $isvalid = true;
    } else if (empty($pass1)) {
        $msg = 'Password is required!!';
        $isvalid = true;
    } else if (empty($pass2)) {
        $msg = 'Confirm password is required!!';
        $isvalid = true;
    } else if ($pass1 !== $pass2) {
        $msg = 'Passwords do not match!!';
        $isvalid = true;
    }

    if ($isvalid) {
        $_SESSION['msg'] = $msg;
        header('Location:../index.php' ); // Redirect to the same page
        exit(); // Ensure no further code is executed
    } else {
        // Process the form data, e.g., insert into the database
    }
}