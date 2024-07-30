const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const Joi = require('joi');
const { userSchema, categorySchema, paymentMethodSchema, expenseSchema,bugetSchema } = require('./validation');
// Import the connection
const conn = require('../connection');

const getApp = express();

getApp.use(express.json());

dotenv.config();
const port = process.env.PORT || 909;

//getting all users
// Get a specific user by ID
getApp.get('/api/users/view/:id', (req, res) => {
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

 // Route for getting all users
getApp.get('/api/user/', (req, res) => {
    const selectAllUsersQuery = "SELECT * FROM users";
  
    conn.query(selectAllUsersQuery, (err, result) => {
      if (err) {
        console.error('Failed to retrieve users. Try again!', err);
        return res.status(500).json({ message: 'Internal Server Error!' });
      }
  
      if (result.length === 0) {
        return res.status(200).json({ message: 'No users found.' });
      }
  
      return res.status(200).json(result);
    });
  });

  module.exports=getApp;