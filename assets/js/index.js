/*Use DOM elements for touch HTML tags*/
//  in order to Sign up

let btn =document.querySelector("#btn");


btn.addEventListener("click",function() {


    /*Name- input*/
    let ad =document.querySelector("#ad");
    let namejs= document.querySelector("#namejs");
    namejs.style.color= `red`; 
   //when error happen it show us in red color. //css//

   console.log(ad.value)
    let customerName =ad.value.trim();// to get Customername string


// control that customer name must contain only letters and must be  minimum 3 and maximum 12 characters.
//for it we use `IF statements` and for letter we use char code
    if (customerName.length<3 ||customerName.length>12){ 
        namejs.innerHTML=`The name must be  minimum 3 and maximum 12 characters.`;
        ad.style.borderColor= "red";
    }

        else{
            for(let i=0; i<customerName.length;i++)
            {let charCode =customerName.charCodeAt(i);
           
                 if(!((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)))
                     {namejs.innerHTML=`The name must  contain only letter.`
                     ad.style.borderColor= "red";
                     break;}// i use break in order to break loop if find something i do not need.
                    else{ namejs.innerHTML= "";} }} //if everything is ok , like if customer write her name correct.

     

/*Surname*/

//I used same code above. So if you do not understand look previous code.
    let soyad =document.querySelector("#soyad");
    let surnamejs= document.querySelector("#surnamejs");
    surnamejs.style.color= `red`;
    let customerSurname =soyad.value.trim();
    
    if (customerSurname.length<3 ||customerSurname.length>15){
        surnamejs.innerHTML=`The surname must be  minimum 3 and maximum 15 characters.`;
        soyad.style.borderColor= "red";}

        else{

            for(let i=0; i<customerSurname.length;i++)
            {let charCode =customerSurname.charCodeAt(i);
            
                if(!((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)))
                    {surnamejs.innerHTML=`The name must  contain only letter.`
                    soyad.style.borderColor= "red";
                    break;}
                    else{ surnamejs.innerHTML= "";}}}
                        

    /* Main Password */
    let password =document.querySelector("#password");
    let passjs =document.querySelector("#passjs");
    passjs.style.color= `red`;
    let customerPassword =password.value.trim();
   
    if (customerPassword.length<8 ||customerPassword.length>20){
        passjs.innerHTML=`The password must be  minimum 8 and maximum 20 characters.`;
        password.style.borderColor= "red"; 
      
    }
        else{ passjs.innerHTML= "";}
        
   

    /* Repeat Password */
    let password2 =document.querySelector("#password2");
    let repeatpassjs =document.querySelector("#repeatpassjs");
    repeatpassjs.style.color= `red`;
    let customerPassword2 =password2.value.trim();


    if (customerPassword2 !==customerPassword){    // I compared codes. Because, sometime customer do not write the same code
        repeatpassjs.innerHTML=`Passwods do not match.`;
        password2.style.borderColor= "red" } 
        else{ repeatpassjs.innerHTML= "";}
       
       // Local storage
        localStorage.setItem(`password`, password2.value.trim());
        let value =localStorage.getItem(`password`);
        console.log(value);
    
    /*E-mail*/ 
    let email =document.querySelector("#email");
    let mailjs =document.querySelector("#mailjs");
    mailjs.style.color= `red`;
    let customerMail =email.value.trim();

    if(customerMail=== " " || !customerMail.includes("@")){mailjs.innerHTML=`Please write your correct mail.`
    email.style.borderColor= "red"; }
    else{ mailjs.innerHTML= "";}

    // Local storage
    localStorage.setItem(`e-mail`, email.value.trim());
    let value2 =localStorage.getItem(`e-mail`);
    console.log(value2);


    /* click `I agree` */
    let checkOk= document.querySelector("#checkOk")
    let isOk= document.querySelector("#isOk");
    isOk.style.color= `red`;

    if(!checkOk.checked){isOk.innerHTML= `Please check`} 
    else{ isOk.innerHTML= "";}



                /*Toggle; float*/

    btn.addEventListener("mouseover", function(){
                  // if inputs are not empty we must remove " right " class; because we must press button
            if(ad.value !==""&&soyad.value !=="" &&  password2.value !=="" && password.value !=="" && email.value !==""){btn.classList.remove("right");}// if inputs are not empty we must remove " right " class; because we must press button
            else{btn.classList.toggle("right") // if inputs are empty we must add " right" class; because our button move to left right with float right 
 
            }

        });



    // We must check all codes, that customer fill all the  blank correctly. After that we redirect customer to another page
        

    
    if (namejs.innerHTML === "" && surnamejs.innerHTML === "" && passjs.innerHTML === "" && repeatpassjs.innerHTML === "" && mailjs.innerHTML === "" && isOk.innerHTML === "") {
      // All checks passed, so redirect to another page
      window.location.href = "http://127.0.0.1:5500/assets/pages/login.html";}

        
      
     

});


         
     


