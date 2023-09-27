
let btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
    let email =document.querySelector("#email");
    let emailjs =document.querySelector("#emailjs");

    email=email.value.trim();
    console.log(email)
    let getMail=localStorage.getItem("e-mail");

    let password =document.querySelector("#password");
    let passwordjs= document.querySelector("#passwordjs");
    password=password.value.trim();


    let getPass=localStorage.getItem("password")
        console.log( password)
        console.log( getPass)
    
     if((email !==getMail)|| (password!==getPass)){
        passwordjs.innerHTML= "The email address or password is incorrect. Please retry...";
        passwordjs.style.color= `red`;
     }else{passwordjs.innerHTML="";}

     /* click `I agree` */

let checkOk= document.querySelector("#checkOk")

let isOk= document.querySelector("#isOk");
isOk.style.color= `red`;

    if(!checkOk.checked){isOk.innerHTML= `Please check`} 
    else{ isOk.innerHTML= "";}
    
    
})