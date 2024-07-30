const mysql=require('mysql2')
const conn=mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:'expense_tracker',
     port:process.env.DB_PORT || 3306
    })
conn.connect(err=>{
      if(err){
           console.log('Error Occured to Connect to Db::',err);
            throw err;
          }
          else{
          //  console.log('Connection Success!')
          }
          //show databases
          conn.query("SHOW DATABASES ;",(err,res)=>{
            if(err)throw err
        //    console.log('List of Available Databases are:\n')

        for(let i=0;i<res.length;i++){
           // console.log(JSON.stringify(res[i]))
               }
                 //check one DB
                 conn.query("SHOW TABLES",(err,result)=>{
                  if(err) throw err
                  //    console.log('Select Db is:',JSON.stringify(result))
                 })
                
           })
            
          
})



    module.exports=conn;