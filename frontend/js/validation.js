document.addEventListener('DOMContentLoaded', () => {
      // Registration Form
      const registerForm = document.getElementById('registerForm');
      const username = document.getElementById('username');
      const email = document.getElementById('email-address');
      const pass1 = document.getElementById('pass1');
      const pass2 = document.getElementById('password2');
  
      registerForm.addEventListener('submit', (e) => {
          validateUserName(e);
          validateEmail(e);
          validatePass1(e);
          validatePass2(e);
      });
  
      // Login Form
      const loginForm = document.getElementById('loginForm');
      const loginEmail = document.getElementById('email');
      const loginPassword = document.getElementById('password');
  
      loginForm.addEventListener('submit', (e) => {
          validateLoginEmail(e);
          validateLoginPassword(e);
      });
  
      // Add Expense Form
      const addExpenseForm = document.getElementById('addExpenseForm');
      const expenseName = document.getElementById('expenseName');
      const expenseAmount = document.getElementById('expenseAmount');
  
      addExpenseForm.addEventListener('submit', (e) => {
          validateExpenseName(e);
          validateExpenseAmount(e);
      });
  
      // Validation functions
      function validateUserName(e) {
          if (username.value === '' || username.value === null) {
              setTimeout(function () {
                  document.getElementById("erroruser").innerHTML = "Username Field is Required!!";
                  document.getElementById("erroruser").style.color = 'red';
                  document.getElementById("username").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("erroruser").innerHTML = "";
              document.getElementById("username").style.border = '2px solid green';
          }
      }
  
      function validateEmail(e) {
          if (email.value === '' || email.value === null) {
              setTimeout(function () {
                  document.getElementById("erroremail").innerHTML = "Email Field is Required!!";
                  document.getElementById("erroremail").style.color = 'red';
                  document.getElementById("email-address").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("erroremail").innerHTML = "";
              document.getElementById("email-address").style.border = '2px solid green';
          }
      }
  
      function validatePass1(e) {
          if (pass1.value === '' || pass1.value === null) {
              setTimeout(function () {
                  document.getElementById("errorpass").innerHTML = "Create your password!!";
                  document.getElementById("errorpass").style.color = 'red';
                  document.getElementById("pass1").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else if (pass1.value.length < 5 || pass1.value.length > 15) {
              setTimeout(function () {
                  document.getElementById("errorpass").innerHTML = "Password must have 5 to 15 characters!!";
                  document.getElementById("errorpass").style.color = 'red';
                  document.getElementById("pass1").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("errorpass").innerHTML = "";
              document.getElementById("pass1").style.border = '2px solid green';
          }
      }
  
      function validatePass2(e) {
          if (pass2.value === '' || pass2.value === null) {
              setTimeout(function () {
                  document.getElementById("errorpass2").innerHTML = "Confirm your password!";
                  document.getElementById("errorpass2").style.color = 'red';
                  document.getElementById("password2").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else if (pass2.value.length < 5 || pass2.value.length > 15) {
              setTimeout(function () {
                  document.getElementById("errorpass2").innerHTML = "Password must have 5 to 15 characters!!";
                  document.getElementById("errorpass2").style.color = 'red';
                  document.getElementById("password2").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else if (pass1.value !== pass2.value) {
              setTimeout(function () {
                  document.getElementById("errorpass2").innerHTML = "Password Not Matched!!";
                  document.getElementById("errorpass2").style.color = 'red';
                  document.getElementById("password2").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("errorpass2").innerHTML = "Password Matched!!";
              document.getElementById("errorpass2").style.color = 'green';
              document.getElementById("password2").style.border = '2px solid green';
          }
      }
  
      function validateLoginEmail(e) {
          if (loginEmail.value === '' || loginEmail.value === null) {
              setTimeout(function () {
                  document.getElementById("erroremail").innerHTML = "Email Field is Required!!";
                  document.getElementById("erroremail").style.color = 'red';
                  document.getElementById("email").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("erroremail").innerHTML = "";
              document.getElementById("email").style.border = '2px solid green';
          }
      }
  
      function validateLoginPassword(e) {
          if (loginPassword.value === '' || loginPassword.value === null) {
              setTimeout(function () {
                  document.getElementById("errorpassword").innerHTML = "Password Field is Required!!";
                  document.getElementById("errorpassword").style.color = 'red';
                  document.getElementById("password").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("errorpassword").innerHTML = "";
              document.getElementById("password").style.border = '2px solid green';
          }
      }
  
      function validateExpenseName(e) {
          if (expenseName.value === '' || expenseName.value === null) {
              setTimeout(function () {
                  document.getElementById("errorexpensename").innerHTML = "Expense Name Field is Required!!";
                  document.getElementById("errorexpensename").style.color = 'red';
                  document.getElementById("expenseName").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("errorexpensename").innerHTML = "";
              document.getElementById("expenseName").style.border = '2px solid green';
          }
      }
  
      function validateExpenseAmount(e) {
          if (expenseAmount.value === '' || expenseAmount.value === null) {
              setTimeout(function () {
                  document.getElementById("errorexpenseamount").innerHTML = "Expense Amount Field is Required!!";
                  document.getElementById("errorexpenseamount").style.color = 'red';
                  document.getElementById("expenseAmount").style.border = '2px solid red';
              }, 10);
              e.preventDefault();
          } else {
              document.getElementById("errorexpenseamount").innerHTML = "";
              document.getElementById("expenseAmount").style.border = '2px solid green';
          }
      }
  });
  