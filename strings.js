// Create a DOM display

var input = document.getElementById("input"); // Input
var submitBtn = document.getElementById("submit-btn"); // Submit button
var reversalDisplay = document.getElementById("reversalDisplay"); // Display Area

var reversedString = "";
function reversal() {   
    reversedString = input.value.split("").reverse().join("").toLowerCase();
    console.log(input.value);
    console.log(reversedString);
    reversalDisplay.innerHTML = reversedString;
}

var alphabitsString = "";
function alphabits() {
    alphabitsString = input.value.split("").sort().join("").toLowerCase();
    console.log(alphabitsString);
    alphabeticalDisplay.innerHTML = alphabitsString;
}

var palindromeString = "";
function palindrome() {
    if (input.value === reversedString) {
        console.log("this is a palindrome");
        palindromeDisplay.innerHTML = "You betcha!"
    } else {
        palindromeDisplay.innerHTML = "Nope! Sorry!";
    }
}

let refreshInput = () => {
    input.value = "";
}

let manipulateStrings = () => {
    reversal();
    alphabits();
    palindrome();
    refreshInput();
}

// Event listener
submitBtn.addEventListener("click", manipulateStrings);