// Assignment code here
function generatePassword() {
  window.alert("Please select from the following criteria");
  window.alert("Please answer by Yes or No")
  var text;
  var lowercase = prompt("Do you want Lowercase ?");
  console.log("Do you want Lowercase? " + lowercase);
  var uppercase = prompt("Do you want uppercase?");
  console.log("Do you want uppercase? " + uppercase)
  var numeric = prompt("Do you want numeric values?");
  console.log("Do you want numeric values? " + numeric)
  var newPassword = prompt("Please enter a value between 8 and 12");
  console.log("Value between 9 and 12   " + newPassword)

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
