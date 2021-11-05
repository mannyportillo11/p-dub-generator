// Assignment code here
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "x",
  "y",
  "z",
];

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

//set empty password array
var passwordArr = [];

function validateLength() {
  lengthPrompt = window.prompt(
    "How long should your password be? Please, choose between 8 and 128 Characters"
  );
  lengthPrompt = parseInt(lengthPrompt);
  if (lengthPrompt > 7 && lengthPrompt < 129) {
    return lengthPrompt;
  } else if (!lengthPrompt) {
    window.alert("Please, enter a valid selection!");
    validateLength();
  } else {
    window.alert("Please, enter a valid selection!");
    validateLength();
  }
}

function lowerIncluded() {
  var lowerCasePrompt = window.confirm(
    "would you like to include lower case letters in your pw?"
  );

  if (lowerCasePrompt) {
    Array.prototype.push.apply(passwordArr, lowerCaseArray);
  }
  return;
}

function upperIncluded() {
  var upperCasePrompt = window.confirm("UPPERCASE?");

  if (upperCasePrompt) {
    Array.prototype.push.apply(passwordArr, upperCaseArray);
  }
  return;
}

function numbersIncluded() {
  var numberCasePrompt = window.confirm("Numb3rs?");

  if (numberCasePrompt) {
    Array.prototype.push.apply(passwordArr, numberArray);
  }
  return;
}
function specialIncluded() {
  var specialCasePrompt = window.confirm("How @bout $pecial characters?");

  if (specialCasePrompt) {
    Array.prototype.push.apply(passwordArr, symbolArray);
  }
  return;
}

function generatePassword() {
  //Welcome Message
  window.alert(
    "Welcome to P Dub Gen! We're gonna help you generate a new password! Just a few questions for you."
  );

  //call length function
  validateLength();

  lowerIncluded();
  upperIncluded();
  numbersIncluded();
  specialIncluded();
  writePassword();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var randomPass = [];

  for (let i = 0; i < lengthPrompt; i++) {
    var randomNum = Math.floor(Math.random() * passwordArr.length);
    var randomChar = passwordArr[randomNum];
    randomPass.push(randomChar);
  }

  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = "Your new password is " + randomPass.join("");
  console.log(randomPass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
