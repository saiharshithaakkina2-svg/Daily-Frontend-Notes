

// Get the form first  becuse we what to display and manipulate the functionalities 

const formValidation = document.getElementById("registeration")

// writing a  submit function and on that we have check the the input values  
formValidation.addEventListener("submit" , function(event){
    event.preventDefault()

    // we have to get the input values throught the id 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim()
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmpassword").value

    let isValid = true


 document.getElementById("nameerror").textContent = "";
     document.getElementById("emailerror").textContent = "";
    document.getElementById("mobileerror").textContent = "";
     document.getElementById("passworderror").textContent = "";
    document.getElementById("confirmpassworderror").textContent ="";
    

    const nameRegex = /^[A-Za-z]{3,10}$/


    if(name === ""){
        document.getElementById("nameerror").textContent = "Fullname is required";
        isValid = false ;
    }

    else if (!nameRegex.test(name)){
      document.getElementById("nameerror").textContent = "Enter valid name"
        isValid = false ;
    }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

     if(email === ""){
        document.getElementById("emailerror").textContent = 'Email is required'
        isValid = false
     }
     else if (!emailRegex.test(email)){
        document.getElementById("emailerror").textContent = "enter valid email"
                isValid = false

     }

     const mobileRegex = /^[6-9]\d{9}$/

     if(mobile === ""){
        document.getElementById('mobileerror').textContent = 'Mobile number required'
        isValid = false
     }
     else if (!mobileRegex.test(mobile)){
        document.getElementById('mobileerror').textContent = "Enter valid mobile number"
        isValid = false
     }
    
     const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    
        if(password === ""){
        document.getElementById('passworderror').textContent = ' password required'
        isValid = false
     }
     else if (!passwordRegex.test(password)){
        document.getElementById('passworderror').textContent = ' enter valid password '
        isValid = false
     }
  
     if(confirmPassword === ""){
        document.getElementById('confirmpassworderror').textContent = ' confirmpassword required'
        isValid = false
     }
     else if (password !== confirmPassword ){
        document.getElementById('confirmpassworderror').textContent = 'password not matched '
        isValid = false
    }

    if(isValid){
        document.getElementById('successMessage').textContent = 'registation success'
        formValidation.reset()
    }
})