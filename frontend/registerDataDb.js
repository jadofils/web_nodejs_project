const mysql=require('mysql2');
const express=require('express');
const session=require('express-session');
const bodyParser=require('body-parser')
const bcrypt=require('bcryptjs');
const path=require('path');
const conn=require('../backend/expenceTracker/connection');
const {check,validatorResult}=require('express-validator');

const registerApp=express();
registerApp.use(express.json());
registerApp.use(bodyParser.json());
registerApp.use(express.urlencoded({extended:true}));
registerApp.use(bodyParser.urlencoded({extended:true}));
//serve the static files, such as css,images and frontent js
registerApp.use(express.static(__dirname));



registerApp.get('/register',(request,response)=>{
      response.sendFile(path.join(__dirname,'./index.html'));
})
//create the user objects
const User={
      tableName:'users',
      createUser:function(newUser,callback){
            conn.query('INSERT INTO'+this.tableName+'SET ?',newUser,callback);
      },
      //select user by email
      getUserByEmail:(email,callback)=>{
conn.query('SELECT*  FROM '+this.tableName+'WHERE email=?',email,callback);
      },
getUserByUsername:(username,callback)=>{
      conn.query('SELECT *FROM '+this.tableName+'WHERE username = ?',username,callback);
}
}
//registration handling


module.exports=registerApp;