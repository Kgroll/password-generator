// Assignment code here

var generateBtn = document.querySelector("#generate"); 
var specialCharacter = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numCharacters = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var passwordLength;
var specialCheck;
var numCheck;
var upperCaseCheck;
var lowerCaseCheck;

//Determine the length of the password

function determineLength() {
 passwordLength = window.prompt("How long would you like the password to be? Please enter a number from 8 to 128."); 

    if (passwordLength<8){              
        alert("Please enter a number between 8 and 128");
        determineLength();
    }else if (password>128){
        alert("Please enter a number between 8 and 128");
        determineLength();
    }else if (isNaN(passwordLength)){
        alert("Please enter a number between 8 and 128");
    }else
        alert("Thank you! Please answer the following questions!");
}
    var specialCharacter = confirm("Do you want to use special characters? Yes or No");
    if (specialCharacter) {
     alert("You said yes to special characters!");
    }
    else {
    alert("You said no to special characters!");
}   

var numCharacters = confirm("Do you want to use numeric characters? Yes or No");
  if (numCharacters) {
      alert("You said yes to numeric characters!");
  }
  else {
    alert("You said no to numeric characters!")
  }
 
var upperCase = confirm("Do you want to use uppercase characters? Yes or No");
  if (upperCase) {
      alert("You said yes to uppercase characters!");
  }
  else {
    alert("You said no to uppercase characters!")
  }
  
var lowerCase = confirm("Do you want to use lowercase characters? Yes or No");
  if (lowerCase) {
      alert("You said yes to lower \case characters!");
  }
  else {
    alert("You said no to lowercase characters!")
  }
  console.log(specialCharacter, numCharacters, lowerCase, upperCase);














//click the button to generate a password
 
// what is the lenth of the password (btween 8 and 128)
const randomFunc = {
    special: getspecialCharacters,
    number: getnumCharacters,
    upper: getupperCase,
    lower: getlowerCase
};      





    

{
// choose character type



function getspecialCharacters() {
    const specialCharacters = ["!@#$%^&*()_?"];
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

function getnumCharacters() {
    return String.fromCharCode[Math.floor(Math.random() * 10) + 48];
}

function getupperCase() {
    return String.fromCharCode[Math.floor(Math.random() * 26) + 65];
}

function getlowerCase() {
    return String.fromCharCode[Math.floor(Math.random() * 26) + 97];
}


//validate input reponses
function generatePassword() {
    const len = length.value;
    let password ="";
for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
}

}


 
 

// Get references to the #generate elements
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}