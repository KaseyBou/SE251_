// JavaScript Document
window.addEventListener("load", init);

function init(e){
    var p = document.querySelectorAll('#form p');
    var span = document.querySelectorAll('#form span');
    var input = document.querySelectorAll('input[type="text"]');
    var confirm = document.querySelector('#confirmation');
    /*var firstName = document.querySelector("#first-name");
    var lastName = document.querySelector("#last-name");
    var email = document.querySelector("#email");
    var phoneNumber = document.querySelector("#phone");*/
    var button = document.querySelector("#butt");

    button.addEventListener('click', errorCheck)

    function errorCheck(e){
        //alert(firstName.value)
        for(value in input)
        {
            if(input[value].value === "")
            {
                p[value].style.color ="red";
                span[value].innerHTML = "*";

            }
            else
            {
                p[value].style.color ="black";
                span[value].innerHTML = "";
            }
        }   

        if(input[value].style.color= "red")
        {
            
        }
      /*  if(lastName.value === "")
        {
            p[1].style.color = "red";
            span[1].innerHTML = "*";
        }
        else
        {
            p[1].style.color = "black";
            span[1].innerHTML = "";
        }

        if(email.value === "")
        {
            p[2].style.color = "red";
            span[2].innerHTML = "*";
        }
        else
        {
            p[2].style.color = "black";
            span[2].innerHTML = "";
        }

        if(phoneNumber.value === "")
        {
            p[3].style.color = "red";
            span[3].innerHTML = "*";
        }
        else
        {
            p[3].style.color = "black";
            span[3].innerHTML = "";
        }8/
        */  
    }

  

    

}
