 
// Assignment code here

//click the button to generate a password
 
// what is the lenth of the password (btween 8 and 128)
function generatePassword(passwordLength) {
    
}
 
// choose character type
var specialCharacters = "";
var numCharacters = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
randPasswordArray[0] = specialCharacters;
randPasswordArray[1] = numCharacters;
randPasswordArray[3] = upperCase;
randPasswordArray[4] = lowerCase;

//validate input reponses
 

 
 
for (var i = 0; i < 10; i++) {
var numCharacters = (Math.floor(Math.random() * 10));
console.log(num);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);