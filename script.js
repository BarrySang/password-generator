//Global variables
let generate = document.getElementById('generate');
let outputField = document.getElementById('output');

//Dictionary
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '='];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Event listeners
//Listen for click on the 'Generate Password' button
generate.onclick = showPassword;

//Functions
//Function to choose the character type to be retrieved
function chooseCharType() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

//Function to get the position of the character to be retrieved
function getCharPos(max) {
    let pos = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    let actPos = pos - 1;
    return actPos;
}

//Function to retrieve the a character
function getCharacter() {
    let type = chooseCharType();
    let max;
    let charPos;
    let character;

    switch(type) {
        case 1:
            max = symbols.length;
            charPos = getCharPos(max);
            character = symbols[charPos];
            break;
        case 2:
            max = numbers.length;
            charPos = getCharPos(max);
            character = numbers[charPos];
            break;
        case 3:
            max = alphabet.length;
            charPos = getCharPos(max);
            character = alphabet[charPos];
            break;
    }

    return character;
}

//Function to create the password
function createPassword() {
    let password = [];
    for(let i = 0; i < 10; i++) {
        generatedChar = getCharacter()
        password.push(generatedChar);
    }

    let finalPass = password.join('');

    return finalPass;
}

//Function to change the text of the output field to the generated password
function showPassword() {
    let password = createPassword();
    outputField.value = password;
}