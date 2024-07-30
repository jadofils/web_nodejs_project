

<section id="register">
        <h2>Register</h2>
        <form action="database/registerServer.php" name='register' id="register" method="post" onsubmit="return registerForm();">
        <?php
if (isset($_SESSION['msg'])) {
    echo '<p>' . $_SESSION['msg'] . '</p>';
    unset($_SESSION['msg']); // Clear the message after displaying it
}
?>  
        <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" >
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email-address" name="email" >
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="pass1" name="password" >
            </div>
            <div>
                <label for="password2">Confirm Password:</label>
                <input type="password" id="password2" name="password2" >
            </div>
            <div>
                <button type="submit" id="registerBtn" name="submit" onclick="return btn();">Register</button>
            </div>
            <p>Already have an account? <a href="#login">Login here</a></p>
        </form>
    </section>
    <div>
    <script src="../js/register.js"></script>
    </div>