let em = document.querySelector("#email");
let pas = document.querySelector("#password");
let form = document.querySelector("form");
let emcheck = document.querySelector("#emailmes");
let passcheck = document.querySelector("#passmes");
let messcheck = document.querySelector("#message");


form.addEventListener("submit", function(dets){
    dets.preventDefault();

    emcheck.textContent = "";
    emcheck.style.display = "none";
    passcheck.textContent = "";
    passcheck.style.display = "none";
    messcheck.textContent = "";
    messcheck.style.display = "none";

        
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    let emailans = emailRegex.test(em.value);
    let passans = passwordRegex.test(pas.value);

    let isValid = true;

    if (!emailans){

        emcheck.textContent = "Email is incorrect";
        emcheck.style.display = "block";
        isValid = false;
    }

    if (!passans){

        passcheck.textContent = "Password is incorrect";
        passcheck.style.display = "block";
        isValid = false;

    }
    
    if (isValid){
        messcheck.textContent = "All Good!!";
        messcheck.style.display = "block";
    }


});