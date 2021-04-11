// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button. do not touch anything above here
generateBtn.addEventListener("click", writePassword);

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = " !@#$%^&*()_+~`|}{[]:;?><,./-=";
var numChar = "0123456789";
var generatorList = "";
var useLowerCase = false;
var useUpperCase = false;
var useSpecialChar = false;
var useNumChar = false;
var number;
var text;
var output = document.getElementById("password").value;

function promptForLength(text) {
  if (text == null) {
    text = "Choose password character length. Pick a number from 8 to 128";
    number = parseInt(window.prompt(text, ""));
    console.log(number);
    confirmation(number);
  }
}

function confirmation() {
    var length = confirm(
    "Your password is going to be " + number + " characters long."
  );
  var upper = confirm("Uppercase characters?");
  var lower = confirm("Lowercase characters?");
  var spec = confirm("Special characters?");
  var num = confirm("Numbers?");
  if ((upper = true)) {
    useUpperCase = true;
    console.log(useUpperCase);
    generatorList += upperCase;
    console.log(generatorList);
  }
  if ((lower = true)) {
    useLowerCase = true;
    console.log(useLowerCase);
    generatorList += lowerCase;
    console.log(generatorList);
  }
  if ((spec = true)) {
    useSpecialChar = true;
    console.log(useSpecialChar);
    generatorList += specialChar;
    console.log(generatorList);
  }
  if ((num = true)) {
    useNumChar = true;
    console.log(useNumChar);
    generatorList += numChar;
    console.log(generatorList);
    buildPass(number, generatorList);
  }
}

function buildPass(number, generatorList, output) {
    var result = [];
    var charactersLength = generatorList.length;
    console.log(charactersLength);

    for (var i = 0; i < number; i++) {
      result.push(
        generatorList.charAt(Math.floor(Math.random() * charactersLength))
      ); console.log("this ran");
    }
     result = result.join("");
     console.log(result);
     output = result;
};

function generatePassword() {
  promptForLength(text);
}
