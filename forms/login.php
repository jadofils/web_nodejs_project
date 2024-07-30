<section id="login">
        <h2>Login</h2>
        <form action="/login" name="login" method="post">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            <p>Don't have an account? <a href="#register">Register</a></p>
        </form>
    </section>