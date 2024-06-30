let upperData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerData = "abcdefghijklmnopqrstuvwxyz";
let number  = "0123456789";
let symbol = "@#%^&()_+|{}[]<>?-=";

let passwordInput = document.querySelector("#passwordInput");
let passwordLength = document.querySelector("#passwordLength");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let num = document.querySelector("#num");
let sym = document.querySelector("#sym");

function generateNumber(data){
    return data[Math.floor(Math.random() * data.length)];
}

function generate(password = ""){
    if(upper.checked){
        password += generateNumber(upperData);
    }
    if(lower.checked){
        password += generateNumber(lowerData);
    }
    if(num.checked){
        password += generateNumber(number);
    }
    if(sym.checked){
        password += generateNumber(symbol);
    }

    if(password.length<passwordLength.value){
        return generate(password)
    }
    passwordInput.value = password;
    console.log(password);
}

function createPassword(){
    alert("Generated Successfully!")
    generate();
}

function copyPassword(){
    passwordInput.select();
    document.execCommand("copy");
    alert("Password Copied Successfully!")
}