document.addEventListener('DOMContentLoaded',()=>{
      const registerForm=document.getElementById('register-form');
      //add events to register form
      registerForm.addEventListener('submit',async(e)=>{
            //prevent form to load
            e.preventDefault();
            const formData=new formData(registerForm);
         const username=FormData.get('username');
         const email=formData.get('email');
         const password1=formData.get('password1');
         const password2=formData.get('password2');
         //try exceptions and remove errors
         try{
         const response=await fetch('/register',{
          method:'POST',
          headers:{'Content-Type':'application/json'
          },
          //change the json into strings
          body:JSON.stringify({username,email,password1,password2})
         });
         if(response.ok){
            alert('Registration Success!')
         }
         }catch(error){
console.log('Error:',error)
         }finally{
        console.log('Finally Is Running!')
         }

      })
})