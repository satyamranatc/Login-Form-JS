let MyForm = document.getElementById("MyForm");
let emailErr = document.getElementById("emailErr");
let passwordErr = document.getElementById("passwordErr");
let PasswordIcon = document.getElementById("PasswordIcon");
let PasswordField = document.getElementById("PasswordField");

MyForm.addEventListener("submit",(e)=>
{
    e.preventDefault();

    let EmailText = e.target[0].value;
    let PasswordText = e.target[1].value;

    console.log(EmailText)
    console.log(PasswordText)


    let EmailCheck = EmailText.split("");
    let PasswordCheck = PasswordText.split("");

    let Check1 = false;
    let Check2 = false;

    for(let i of EmailCheck)
    {
        if(i == "@")
        {
            Check1 = true; 
        }
        else if(i == ".")
        {
            Check2 = true;
        }
        
    }

    if((Check1 == false) || (Check2 == false))
    {
        emailErr.innerText = "Enter a Vaild email"
    }
    else
    {
        emailErr.innerText = "";
    }

    ValidPassword1 = false;
    ValidPassword2 = false;
    ValidPassword3 = false;
    ValidPassword4 = false;

    for(let i in PasswordCheck)
    {
        let Code = PasswordText.charCodeAt(i)
        if(Code >= 65 && Code <= 90)
        {
            ValidPassword1 = true;
        }
        else if(Code >= 97 && Code <= 122)
        {
            ValidPassword2 = true;
        }
        else if(Code >= 48 && Code <= 57)
        {
            ValidPassword3 = true;
        }
        else if(
        (Code >= 33 && Code <= 47) || 
        (Code >= 58 && Code <= 64) || 
        (Code >=91 && Code <= 96)  || 
        (Code >=123 && Code <= 126)  
        )
        {
            ValidPassword4 = true;
        }
    }  

    if(!ValidPassword1 || !ValidPassword2 || !ValidPassword3 || !ValidPassword4)
    {
        passwordErr.innerText = "Enter a Vaild password"
    }
    else{
        passwordErr.innerText = "";
    }

});


let Type = "text"
PasswordIcon.onclick = ()=>{
    
    PasswordIcon.classList.toggle("VissableEyeBg");
    if(Type == "text")
    {
        Type = "password";
        PasswordField.type = Type;

    }
    else
    {
        Type = "text";
        PasswordField.type = Type;
    }
}

