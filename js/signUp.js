
//select input Field 
var username=document.getElementById("username");
var email=document.getElementById("email");
var password=document.getElementById("password");
var confirmPassword=document.getElementById("confirmPassword");

//select error message field
var errorMessages=document.querySelectorAll(".error-message");

//select sign up form
var form=document.getElementById("signUpForm");




//check the validity of username
checkUsername=()=>{
    if(username.value==""){

        errorMessages[0].textContent="This Field Is Required";
        return false;
    }
    else if(!username.value.match(/^[a-zA-Z]([a-zA-Z0-9]{3,13})[a-zA-Z]$/)){
        errorMessages[0].textContent="Username must consist of 5 to 15 characters, only letters and numbers are allowed ";
        return false;
    }
    else{
        errorMessages[0].textContent="";
        return true;
    }
}


//check the validity of email
checkEmail=()=>{
    if(email.value==""){

        errorMessages[1].textContent="This Field Is Required";
        return false;
    }
    else if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
        errorMessages[1].textContent="invalid email format";
        return false;
    }
    else{
        errorMessages[1].textContent="";

        return true;

    }
}
//check the validity of confirmpassword

checkPassword=()=>{
    if(password.value==""){

        errorMessages[2].textContent="This Field Is Required";
        return false;
    }
    else if(password.value.length<8){
        errorMessages[2].textContent="password must consists of 8 characters at least";
        return false;
    }
    else{
        errorMessages[2].textContent="";
        return true;
    }
}
//check the validity of confirmpassword

checkConfirmPassword=()=>{
    if(confirmPassword.value==""){

        errorMessages[3].textContent="This Field Is Required";
        return false;
    }
    else if(confirmPassword.value!==password.value){
        errorMessages[3].textContent=" password not match";
        return false;
    }
    else{
        errorMessages[3].textContent="";
        return true;
    }
}



//submit form 
form.addEventListener("submit",(e)=>{
e.preventDefault();
if(checkUsername()&&checkEmail()&&checkPassword()&&checkConfirmPassword()){
    const data = {username:username.value,email:email.value, password:password.value, password_confirmation:confirmPassword.value};
    console.log(data);

fetch('https://goldblv.com/api/hiring/tasks/register',  {
  method: 'POST',

  headers: {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin':'*',
 },
 mode: 'no-cors',
  body: JSON.stringify(data),
})
.then(res=>res.json())
.then((data) => {
    window.localStorage.setItem("email",email.value);
    open("succeed.html","_self");
    console.log('Success:', data);
    
 })
.catch((error) => {
    console.error('Error:', error);
});
}
else{
    console.log( checkUsername(),
    checkEmail(),
    checkPassword(),
    checkConfirmPassword());

    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
}
})

