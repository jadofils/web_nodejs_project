const mysql = require('mysql2');
const dotenv = require('dotenv');
const conn = require('./expenceTracker/connection');
const app = require('./expenceTracker/routes/post');
const getApp=require('./expenceTracker/routes/get');
dotenv.config();

const port = process.env.PORT || 909;

// Open the port
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on: http://localhost:${port}`);
});
//getting routes port
getApp.listen(400, (err) => {
    if (err) throw err;
    console.log(`Server is running on: http://localhost:400/api/users/`);
});
