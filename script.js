// Assignment Code
let generateBtn = document.querySelector("#generate");

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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
  
  const newArr = [];
  let pass = "";
  
  let lowerPrompt = window.confirm("Would you like lowercase letters in your password. ie 'a' 'b' 'c'");
  if(lowerPrompt){
    newArr.push(...alphabet);
  }
  let upperPrompt = window.confirm("Would you like uppercase letters in your password. ie 'A' 'B' 'C'");
  if(upperPrompt){
    newArr.push(...upAlphabet);
  }
  let numericPrompt = window.confirm("Would you like numbers in your password. ie '1' '2' '3'");
  if(numericPrompt){
    newArr.push(...numeric);
  }
  let specialPrompt = window.confirm("Would you like special letters in your password. ie '@' '$' '%'");
  if(specialPrompt){
    newArr.push(...special);
  }

  console.log(newArr);

  if(!lowerPrompt && !upperPrompt && !numericPrompt && !specialPrompt){
    window.alert("You must choose atleast one type of characters to use!");
    return generatePassword();
  }

  console.log(newArr);

  for(let i = 0; i <= length; i++){
    let num = Math.floor(Math.random() * (newArr.length - 1));
    console.log(num);
    pass += newArr[num];
  }

  return pass;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
