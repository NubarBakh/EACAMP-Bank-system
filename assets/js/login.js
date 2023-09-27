

// We need button click for beginning process, due to this reason we create DOM elements.
let btn=document.querySelector("#btn");

btn.addEventListener("click",function(){

    //E-mail
    let email =document.querySelector("#email");
    let emailjs =document.querySelector("#emailjs");

    email=email.value.trim();
    console.log(email)
    
    //localStorage/ GetItem
    let getMail=localStorage.getItem("e-mail");


    //Password
    let password =document.querySelector("#password");
    let passwordjs= document.querySelector("#passwordjs");
    password=password.value.trim();

    //localStorage/ GetItem
    let getPass=localStorage.getItem("password")
       

    //We must use there if statement because, we need to know  these elements  are the same or not
     if((email !==getMail)|| (password!==getPass)){
        passwordjs.innerHTML= "The email address or password is incorrect. ";
        passwordjs.style.color= `red`;
       
     }else{passwordjs.innerHTML="";}


     
     /* click `I agree` */

let checkOk= document.querySelector("#checkOk")

let isOk= document.querySelector("#isOk");
isOk.style.color= `red`;

    if(!checkOk.checked){isOk.innerHTML= `Please check`} 
    else{ isOk.innerHTML= "";}
    
    
})