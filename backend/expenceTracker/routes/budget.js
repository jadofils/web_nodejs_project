const express = require('express');
const budgets = express();
const conn = require('../connection');
const { budgetSchema } = require('./validation'); // Assuming validation schema is correctly imported

budgets.use(express.json());

// Insert budget route
budgets.post('/budgets', (req, res) => {
    const { error, value } = budgetSchema.validate(req.body);
    if (error) {
        console.error('Validation error:', error);
        return res.status(400).send(error.details[0].message); // Send a response and return to avoid further processing
    }

    const { user_id, category_id, amount, start_date, end_date } = value;
    const query = "INSERT INTO budgets (user_id, category_id, amount, start_date, end_date) VALUES (?, ?, ?, ?, ?)";

    conn.query(query, [user_id, category_id, amount, start_date, end_date], (err, result) => {
        if (err) {
            console.error('Error inserting budget:', err);
            if (err.code === 'ER_NO_REFERENCED_ROW_2') {
                // Handle foreign key constraint error
                return res.status(400).send('Invalid category ID');
            }
            return res.status(500).send('Internal Server Error');
        }
        res.status(201).send(`Budget created successfully with ID: ${result.insertId}`);
    });
});

// Example other route to avoid multiple responses
// selecting one user. 
budgets.get('/budgets/:id', (req, res) => {
      const userId = req.query.id;
      const qry = "SELECT * FROM budgets WHERE budget_id>=?";
      
      conn.query(qry, [userId],(err, results) => {
          if (err) {
              return res.status(500).json({ error: err.message });
          }
          return res.status(200).json({ message: 'Response for Selected Budgets', data: results });
      });
  });
  
  
  //update
  budgets.patch('/budgets/update/:id', (req, res) => {
      const { error, value } = req.budgetSchema.validate(req.body);
  
      if (error) {
          return res.status(400).json({ error: "Validation Error!!", message: error.message });
      }
  
      const { user_id, category_id, amount, start_date, end_date } = value;
      const update = "UPDATE budgets SET user_id=?, category_id=?, amount=?, start_date=?, end_date=? WHERE budget_id=?";
      const budgetid = req.params.id;
  
      conn.query(update, [user_id, category_id, amount, start_date, end_date, budgetid], (err, result) => {
          if (err) {
              return res.status(500).json({ error: "Backend Server Error!!", message: err.message });
          }
  
          if (result.affectedRows > 0) {
              return res.status(200).json({ message: 'Update Success', data: result });
          } else {
              return res.status(404).json({ message: 'Budget not found' });
          }
      });
  });
//delete
budgets.delete('/delete/:budget_id',(req,res)=>{
const userid=req.params.budget_id;
const del = "DELETE FROM budgets WHERE budget_id = ?";
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
})
module.exports=budgets;