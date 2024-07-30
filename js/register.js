document.addEventListener('DOMContentLoaded', () => {
      const registerForm = document.getElementById('registerForm');
      const username = document.getElementById('username');
      const email = document.getElementById('email-address');
      const pass1 = document.getElementById('pass1');
      const pass2 = document.getElementById('password2');
  
      function validateForm() {
          if (username.value === '' || username.value === null) {
              alert('Username is required!!');
              return false;
          } else if (email.value === '' || email.value === null) {
              alert('Email is required!!');
              return false;
          } else if (pass1.value === '' || pass1.value === null) {
              alert('Password is required!!');
              return false;
          } else if (pass2.value === '' || pass2.value === null) {
              alert('Confirm Password is required!!');
              return false;
          } else if (pass1.value !== pass2.value) {
              alert('Passwords do not match!!');
              return false;
          } else {
              return true; // Form is valid
          }
      }
  
      registerForm.addEventListener('submit', (e) => {
          if (!validateForm()) {
              e.preventDefault(); // Prevent form submission if validation fails
          }
      });
  });
  