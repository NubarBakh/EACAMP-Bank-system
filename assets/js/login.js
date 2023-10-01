

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
    let passwords =document.querySelector("#password");
    let passwordjs= document.querySelector("#passwordjs");
    password=passwords.value.trim();

    console.log(password.value)

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



     /*Toggle; float*/

    btn.addEventListener("mouseover", function(){
        
        // if inputs are not empty we must remove " right " class; because we must press button
        if( passwords.value !=="" && email.value !=="" ){btn.classList.remove("right");}// if inputs are not empty we must remove " right " class; because we must press button
            else{
                btn.classList.toggle("right") // if inputs are empty we must add " right" class; because our button move to left right with float right 

  }

});
  
})