// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ARRAYS / FUNCTIONS generating random character from array
    // array for lowercase letters
    // function for random lowercase array
    function randomLowercase() {
        const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
        return lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
     }
    
     // array for uppercase letters
    // function for random uppercase array
    function randomUppercase() {
        const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        return uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
    }
    
    // array for numbers 1-9
    // function for random numbers array
    function randomNumber() {
        const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        return numbersArray[Math.floor(Math.random()*numbersArray.length)];
    }
    // array for special characters
    // function for random special characters array
    function randomSpecial() {
        const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];
        return specialArray[Math.floor(Math.random()*specialArray.length)];
    }

// VARIABLES:
    // user input (ok or cancel to all prompts)
    // computer response to what user input is
    // length of password: 8-128 characters (alert if not within parameters)

// EVENT LISTENERS:
    // onClick a series of prompts should follow

// PROMPTS/CONFIRMS:
    // pw length (prompt) - 8-128 characters
    

    // // lowercase letters? (confirm)
   

    // // uppercase letters? (confirm)
    

    // // numbers? (confirm)
   

    // // special characters? (confirm)
  
// set var for password length


// FUNCTIONS:
// function producePassword () {
    var userInput = parseInt(prompt("How many characters would you like your password to be?"));
    // if pwLength is equal to or greater than 8, or less than or equal to 128
    if (8 <= userInput && userInput <= 128) {
        // ask about lowercase characters
        var confirmLowercase = confirm("Would you like to include lowercase letters?"); 
        var confirmUppercase = confirm ("Would you like to include uppercase letters?");
        var confirmNumbers = confirm ("Would you like to include numbers");
        var confirmSpecial = confirm ("Would you like to include special characters?");

        
    } else { 
    
    alert("The number of characters must at least 8, but no more than 128!");}

// function passwordRequirements
// We know that the overall function will require all of the different variables to be added together
// use 'concat' to add them together in an overall 'pwcharacters' var
    var passwordChar = []
    // adds lowercase array to overall pwchar var
    if (confirmLowercase) {
        passwordChar = passwordChar.concat(lowercaseArray);
    }
    // adds uppercase array to overall pwchar var
    if (confirmUppercase) {
        passwordChar = passwordChar.concat(uppercaseArray);
    }
    // adds numbers array to overall pwchar var
    if (confirmNumbers) {
        passwordChar = passwordChar.concat(numbersArray);
    }
    // adds special array to overall pwchar var
    if (confirmSpecial) {
        passwordChar = passwordChar.concat(specialArray);
    }
        // pwLength + lowercase + uppercase + numbers + special
        // I think we would need to combine all of the arrays and randomize them in order to generate the pw
        // however, someone may opt out of the different variables meaning that we have to, within the function take that into account

// CONDITIONALS:
    // if 'okay' lowercase letters add array for that
        // if 'cancel' don't add lowercase array
    // if 'okay' for uppercase add uppercase array
        // if 'cancel' don't add uppercase array
    // if 'okay' to numbers add number array
        // if 'cancel' don't add number array
    // if 'okay' to special characters add special characters array
        // if 'cancel' don't add special characters


