// TODO: Implement the password generation logic based on user input
const lengthInput = document.getElementById('length');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSpecialChars = document.getElementById('includeSpecialChars');
const passwordOutput = document.getElementById('passwordOutput');
const generateBtn = document.getElementById('generatebtn');
const copyBtn = document.getElementById('copybtn');
const errorMessage = document.getElementById('error-message');

// Character sets for password generation
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()';

// TODO: Create a variable for the character set based on selected options
function getRandomChar(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}

function generatePassword() {
  let charSet = '';
  let password = '';

  if (includeUppercase.checked) charSet += uppercase;
  if (includeLowercase.checked) charSet += lowercase;
  if (includeNumbers.checked) charSet += numbers;
  if (includeSpecialChars.checked) charSet += specialChars;

  // TODO: Generate the password based on the selected criteria
  if (charSet === '') {
    alert('Please select at least one criteria for the password.');
    return;
  }

  for (let i = 0; i < lengthInput.value; i++) {
    password += getRandomChar(charSet);
  }

  passwordOutput.value = password;
}

// TODO: Add event listener to the button to call generatePassword and display the output
function copyPassword() {
  passwordOutput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

// BONUS: Implement the copy to clipboard functionality
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
