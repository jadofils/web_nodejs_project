const express = require('express');
const expense = express();
const conn = require('../connection');
const { expenseSchema } = require('./validation'); // Assuming validation schema is correctly imported

expense.get('/expense', (req,res) => {
      const query = "SELECT * FROM expenses";
      
      conn.query(query, (err, results) => {
          if (err) {
              return res.status(500).json({ error: "Backend Server Error!!", message: err.message });
          }
          return res.status(200).json({ message: 'Expenses fetched successfully!', data: results});
      });
  });
  //fetch one item
  expense.get('/expense/:id',(req,res)=>{
     const selectid=req.params.id;
     const selectOne="SELECT * FROM expenses WHERE expense_id=?";
      conn.query(selectOne,[selectid],(err,results)=>{
            if(err){
                  return res.status(500).json({ error: "Backend Server Error!!", message: err.message });

            }
            return res.status(200).json({ message: 'Expenses fetched is one!', data: results});

      })
  });
// delete an expense
expense.delete('/delete/:id', (req, res) => {
    const deleteid = req.params.id;
    const del = "DELETE FROM expenses WHERE expense_id = ?";
    
    conn.query(del, [deleteid], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Backend Error!!', error: err.message });
        }
        
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Expense Not Found!!' });
        }
        
        return res.status(200).json({ message: 'Expense deleted successfully!', data: results });
    });
});

//update the expenses
expense.put('/update',(req,res)=>{
    const updateid=req.params.id;
    return res.status(200).json({message:'Hello world->id is:'})
    
})
module.exports=expense;