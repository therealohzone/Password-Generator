// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


//Variables for Array
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "//", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];

function getPasswordOptions() {
  var pwLength = parseInt(prompt("Pick a number between 8 to 128 to determine you password length"),10);
   var passwordOptions = {length: pwLength
  }
  return passwordOptions
}

function pullRandom(arr) {
  var pullIndex = Math.floor(Math.random() * arr.length);
  var pullElement = arr[pullIndex];
  
  return pullElement;
}


function generatePassword() {
  var options = getPasswordOptions();
  var newPassword = [] ;
  var randomSelect = [] ;
  var possibleSelect = [] ;
  // var userSelect = parseInt(prompt("Pick a number between 8 to 128 to determine you password length"),10);
  if (options >= 8 && options <= 128) {
    var lowerCase = confirm ("Click OK if you want lower case letters in your password");    
  } else { 
    alert ("Please choose a number from 8 to 128.")
  }
  if (lowerCase === true) {
    possibleSelect = possibleSelect.concat(lowerLetter);
    randomSelect.push (pullRandom(lowerLetter));
    var upperCase = confirm ("Click OK if you want upper case letters in your password");
  } else {
    var upperCase = confirm ("Click OK if you want upper case letters in your password");
  }
  
  if (upperCase === true) {
    possibleSelect = possibleSelect.concat(upperLetter);
    randomSelect.push (pullRandom(upperLetter));
    var numbers = confirm ("Click OK if you want numbers in your password");
  } else {
    var numbers = confirm ("Click OK if you want numbers in your password")
  }
  
  if (numbers === true) {
    possibleSelect = possibleSelect.concat(numbersArray);
    randomSelect.push (pullRandom(numbersArray));
    var special = confirm ("Click OK if you want Special Characters in your password");
  } else {
    var special = confirm ("Click OK if you want Special Characters in your password")
  }
  
  if (special === true) {
    possibleSelect = possibleSelect.concat(specialCharacters);
    randomSelect.push (pullRandom(specialCharacters));
  }

  for (var i= 0; i<possibleSelect.length; i++) {
   var possibleSelect = pullRandom(possibleSelect);
   newPassword.push(possibleSelect);
  }

  for (var i = 0; i<randomSelect.length; i++) {
    newPassword[i] = randomSelect[i];
  }

  return newPassword.join('');
}



// 1. Prompt the User for the password criteria (window.prompt)
// a. Password length 8 ->128
// b. lowercase, uppercase, numbers, special characters
// 2. Validate the input. Ensure character length is between 8 and 128.
// Need to ensure at least one character was selected
// Need some type of input validation
// 3.Generate password based on criteria.


//4. Display password to the page. 
