const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const Joi = require('joi');
const { userSchema, categorySchema, paymentMethodSchema, expenseSchema,bugetSchema } = require('./validation');
// Import the connection
const conn = require('../connection');

const app = express();

app.use(express.json());

dotenv.config();
const port = process.env.PORT || 909;



// Creating routes for users
app.post('/api/users', (req, res) => {
    const { error, value } = userSchema.validate(req.body);
    if (error) {
        console.error('Routes Not Found!', error);
        return res.status(400).send(error.details[0].message);
    }
    const { username, email, password } = value;
    const query = "INSERT INTO Users(username, email, password) VALUES(?,?,?)";

    conn.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Internal Server Error!!');
            return;
        }
        res.status(201).send(`User Created Successfully: ${result.insertId}`);
    });
});
//getting all users
// Get a specific user by ID
app.get('/api/users/view/:id', (req, res) => {
      const userid = req.params.id;
      const select = "SELECT * FROM users WHERE user_id >= ?";
  
      conn.query(select, [userid], (err, results) => {
          if (err) {
              console.error(`Failed to retrieve user with ID ${userid}:`, err);
              return res.status(500).json({ error: 'Internal Server Error' });
          }
          if (results.length === 0) {
              return res.status(404).json({ message: 'User not found' });
          }
          res.status(200).json({ user: results });
      });
  });
  //update user
  app.patch('/api/users/update/:id',(req,res)=>{
    const {error,value}=userSchema.validate(req.body);
    if(error){
        console.error('Error in updation:',error);
      return  res.status(400).json({error:'No updation Made. Try Again!!'});
    }
    const {username,email,password}=value;
    const userid=req.params.id;
    const update='UPDATE users SET username=?,email=?,password=? WHERE user_id=?';
conn.query(update,[username,email,password,userid],(err,res)=>{
    if(err){
        console.error('Failed to update:',err);
        res.status(201).send(`User updated Successfully`);
    }
})
  })
//delete users
app.delete('/api/users/:id', (req, res) => {
      const userid = req.params.id;
      const del = "DELETE FROM Users WHERE user_id = ?";
  
      conn.query(del, [userid], (err, result) => {
          if (err) {
              console.error('Deletion Error', err);
              return res.status(500).json({ error: 'Internal Server Error' });
          }
          if (result.affectedRows === 0) {
              return res.status(404).json({ message: 'User not found' });
          }
          return res.status(200).json({ message: 'Successfully Deleted' });
      });
  });
  

module.exports = app;
