const mysql=require('mysql2')
const conn=mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'expense_tracker',
      port:3306
})
module.exports=conn;