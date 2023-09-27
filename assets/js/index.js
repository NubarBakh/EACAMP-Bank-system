


let btn =document.querySelector("#btn");



btn.addEventListener("click",function() {



    /*Name*/
    let ad =document.querySelector("#ad");
    let namejs= document.querySelector("#namejs");
    namejs.style.color= `red`;


    let customerName =ad.value.trim();

    if (customerName.length<3 ||customerName.length>12){
        namejs.innerHTML=`The name must be  minimum 3 and maximum 12 characters.`;}

        else{
            for(let i=0; i<customerName.length;i++)
            {let charCode =customerName.charCodeAt(i);
           
                 if(!((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)))
                     {namejs.innerHTML=`The name must  contain only letter.`
                     break;}
                    else{ namejs.innerHTML= "";} }}

     

/*Surname*/


    let soyad =document.querySelector("#soyad");
    let surnamejs= document.querySelector("#surnamejs");
    surnamejs.style.color= `red`;
    let customerSurname =soyad.value.trim();
    
    if (customerSurname.length<3 ||customerSurname.length>15){
        surnamejs.innerHTML=`The surname must be  minimum 3 and maximum 15 characters.`;}

        else{

            for(let i=0; i<customerSurname.length;i++)
            {let charCode =customerSurname.charCodeAt(i);
            
                if(!((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)))
                    {surnamejs.innerHTML=`The name must  contain only letter.`
                    break;}
                    else{ surnamejs.innerHTML= "";}}}
                        

/* Main Password */
let password =document.querySelector("#password");
let passjs =document.querySelector("#passjs");
passjs.style.color= `red`;
let customerPassword =password.value.trim();
   
    if (customerPassword.length<8 ||customerPassword.length>20){
        passjs.innerHTML=`The password must be  minimum 8 and maximum 20 characters.`; }
        else{ passjs.innerHTML= "";}

   

/* Repeat Password */
let password2 =document.querySelector("#password2");
let repeatpassjs =document.querySelector("#repeatpassjs");
repeatpassjs.style.color= `red`;
let customerPassword2 =password2.value.trim();

    if (customerPassword2 !==customerPassword){
        repeatpassjs.innerHTML=`Passwods do not match.`;} 
        else{ repeatpassjs.innerHTML= "";}

    
/*E-mail*/ 
let email =document.querySelector("#email");
let mailjs =document.querySelector("#mailjs");
mailjs.style.color= `red`;
let customerMail =email.value.trim();

if(customerMail=== " " || !customerMail.includes("@")){mailjs.innerHTML=`Please write your correct mail.`}
else{ mailjs.innerHTML= "";}


/* click `I agree` */

let checkOk= document.querySelector("#checkOk")

let isOk= document.querySelector("#isOk");
isOk.style.color= `red`;

    if(!checkOk.checked){isOk.innerHTML= `Please check`} 
    else{ isOk.innerHTML= "";}

})


