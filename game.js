 
// Assignment code here
//click the button to generate a password
 
// what is the lenth of the password (btween 8 and 128)
 
 
// choose character type
 
//validate input reponses
 
var character = ("");
 
 
for (var i = 0; i < 10; i++) {
var num = (Math.floor(Math.random() * 129));
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