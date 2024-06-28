// Assignment Code
let generateBtn = document.querySelector("#generate");

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numeric = ['1','2','3','4','5','6','7','8','9'];
const special = ['!','@','#','$','%','^','&','*','(',')','_','+'];

const generatePassword = function(){
  let length = window.prompt("How long would you like your password to be between 8-128 characters long?");
  console.log(length);
  if(isNaN(length) || length === null || length === undefined ){
    window.alert("Please type a number between 8 and 128!");
    generatePassword();
  }else if(length < 8 || length > 128){
    window.alert("Please type a number between 8 and 128!");
    generatePassword();
  }

  const nerArr = [];
  let lowerPrompt
  let upperPrompt
  let numericPrompt
  let specialPrompt

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
