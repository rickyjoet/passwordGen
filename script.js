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

function generatePassword() {
  var length = prompt("Please provide how many charcters between 8-128?");
  var charactersPrompt = prompt(
    "Do you want password to include uppercase, lowercase, numbers, symbols, or all "
  );

  function makeidAll(length) {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=~`<>;:[]{}|/?";
    var charactersLength = characters.length;


    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
    console.log(result);
  }

  function makeidLetnum(length) {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;


    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
    console.log(result);
  }

  console.log(makeid(length));

  function makeidLetSym(length) {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=~`<>;:[]{}|/?";
    var charactersLength = characters.length;


    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
    console.log(result);
  }

  console.log(makeid(length));

  function makeidNumSym(length) {
    var result = [];
    var characters = "0123456789~!@#$%^&()_+|}{:?><,./;[]\ ";
    var charactersLength = characters.length;


    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
    console.log(result);
  }

  console.log(makeid(length));

  function makeidLet(length) {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;


    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
    console.log(result);
  }

  console.log(makeid(length));





  if (length >= 8 && length <= 128) {
    charactersPrompt;
    if (charactersPrompt == "all") {
      makeid(length);
    } else if (charactersPrompt == "uppercase, lowercase, numbers") {
      makeidLetnum(length);
    } else if (charactersPrompt == "uppercase, lowercase, symbol") {
      makeidLetSym(length);
    } else if (charactersPrompt == "numbers, symbol") {
      makeidNumSym(length);
    } else if (charactersPrompt == "uppcase, lowercase"){
      makeidLet(length)
    }

  } else length < 8 && length > 128;

  alert("Error, please try again.");
}

//if then statements, depending on character prompt about password willl include uppercase, lowercase, numbers, symbols, or all
  // prompt("NOPE, must be between 8 and 128");

  // if (length >= 8 && length <= 128) {
  //   var charactersPrompt = prompt("Do you want password to include uppercase, lowercase, numbers, symbols, or all ")
  //   makeid(length);
  // } else (length < 8 && length > 128)