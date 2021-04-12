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


  if (lowercase === "Yes"){
    var strlower = "abcdefghijklmnopqrstuvwxyz";
  }
  else {
    console.log("No lowercase");
  }

  if (uppercase === "Yes"){
    var strupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else {
    console.log("No uppercase");
  }

  if (numeric === "Yes"){
    var strnumeric = "0123456789";
  }
  else{
    console.log("No Numeric values");
  }

  var pass = "";
  var str = (strlower + strupper + strnumeric);

  for (i=1; i <= 12 ; i++) {
    var char = Math.floor(Math.random() * str.length +1);

    pass += str.charAt(char)
  }
  return pass;
  generatePassword();
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

