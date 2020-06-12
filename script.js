// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = document.querySelector("#password");
    //  Now we need to put the randomPW into the generator box

    password.value = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// FUNCTIONS:

var userInput = parseInt(prompt("How many characters would you like your password to be?"));
// if pwLength is equal to or greater than 8, or less than or equal to 128
if (8 <= userInput && userInput <= 128) {
    // ask about lowercase characters
    var confirmLowercase = confirm("Would you like to include lowercase letters?");
    var confirmUppercase = confirm("Would you like to include uppercase letters?");
    var confirmNumbers = confirm("Would you like to include numbers");
    var confirmSpecial = confirm("Would you like to include special characters?");


} else {

    alert("The number of characters must be at least 8, but no more than 128!");
}


// function passwordRequirements
// We know that the overall function will require all of the different variables to be added together
// use 'concat' to add them together in an overall 'pwcharacters' var
function generatePassword() {
    var passwordChar = []
    // adds lowercase array to overall pwchar var
    if (confirmLowercase) {
        var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        passwordChar = passwordChar.concat(lowercaseArray);
    }
    // adds uppercase array to overall pwchar var
    if (confirmUppercase) {
        var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        passwordChar = passwordChar.concat(uppercaseArray);
    }
    // adds numbers array to overall pwchar var
    if (confirmNumbers) {
        var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        passwordChar = passwordChar.concat(numbersArray);
    }
    // adds special array to overall pwchar var
    if (confirmSpecial) {
        var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];
        passwordChar = passwordChar.concat(specialArray);
    }
    // we need a var that will be filled by the generated pw
    passwordText = "";
    var complete = "";
    // after we have randomized randomPw, we need to ensure userInput = the number of random chars returned
    for (let i = 0; i < userInput; i++) {
        // after we have combined all chars into an overall "pwchar" set, now we can set that to being randomized
        passwordText = passwordChar[Math.floor(Math.random() * passwordChar.length)];
        complete = complete + passwordText;
    }
    console.log(`This is your password: ${complete}`);
    return complete;
}



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


