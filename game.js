// Assignment code here

var generateBtn = document.querySelector("#generate"); 
var specialCharacter = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numCharacters = "0123456789";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";   
var passwordLength;
var userPassword = "";
var passwordGroup = "";

//Determine the length of the password


 passwordLength = prompt("How long would you like the password to be? Please enter a number from 8 to 128."); 

    if (passwordLength<8){              
        alert("Please enter a number between 8 and 128");
        determineLength();
    }else if (passwordLength>128){
        alert("Please enter a number between 8 and 128");
        determineLength();
    }else if (isNaN(passwordLength)){
        alert("Please enter a number between 8 and 128");
    }else{
        alert("Thank you! Please answer the following questions, you must say yes to at least 1 type of character!");
}
    console.log(passwordLength);

// choose character type and validate input reponses
      
var selectspecialCharacter = confirm("Do you want to use special characters? Yes or No");
 if (selectspecialCharacter) {
     alert("You said yes to special characters!");    
 }
 else {
     alert("You said no to special characters!");
     
   }
   

var selectnumCharacters = confirm("Do you want to use numeric characters? Yes or No");
  if (selectnumCharacters) {
      alert("You said yes to numeric characters!");
      
  }
  else {
    alert("You said no to numeric characters!")
  }
 
var selectupperCaseCharacters = confirm("Do you want to use uppercase characters? Yes or No");
  if (selectupperCaseCharacters) {
      alert("You said yes to uppercase characters!");
      
  }
  else {
    alert("You said no to uppercase characters!")
  }
  
var selectlowerCaseCharacters = confirm("Do you want to use lowercase characters? Yes or No");
  if (selectlowerCaseCharacters) {
      alert("You said yes to lowercase characters!");
      
  }
  else  {
    alert("You said no to lowercase characters!")
  }


  console.log(selectspecialCharacter, selectnumCharacters, selectlowerCaseCharacters, selectupperCaseCharacters);


//click the button to generate a password

function generatePassword() {
    if (selectlowerCaseCharacters) {
    passwordGroup += lowerCaseCharacters;
    }
    if (selectupperCaseCharacters) {
    passwordGroup += upperCaseCharacters;
    }
    if (selectnumCharacters) {
    passwordGroup += numCharacters;
    }
    if (selectspecialCharacter) {
    passwordGroup += specialCharacter;
    }
    for (let i = 0; i < passwordLength; i++) {
      userPassword += passwordGroup.charAt(
      Math.floor(Math.random() * passwordGroup.length)
      );
    }
    return userPassword;
  }
    
 

// Get references to the #generate elements

 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
