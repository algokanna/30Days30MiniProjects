"use strict";
const charLength = document.querySelector("#character-length"),
  charLengthIndicator = document.querySelector("#character-length-indicator"),
  includeUppercase = document.querySelector("#include-uppercase"),
  includeLowercase = document.querySelector("#include-lowercase"),
  includeNumbers = document.querySelector("#include-numbers"),
  includeSymbols = document.querySelector("#include-symbols"),
  generateButton = document.querySelector("#generate"),
  result = document.querySelector("#result"),
  pwdStrength = document.querySelector("#strength-indicator"),
  warningMessage = document.querySelector("#warning"),
  lowerCases = [
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
    "w",
    "x",
    "y",
    "z",
  ],
  upperCases = lowerCases.toString().toUpperCase().split(","),
  numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".split(""),
  charPool = [];
let pwdLength = 0,
    pwd = "";
function charLengthUpdate() {
  charLengthIndicator.innerHTML = charLength.value;
}
function charPoolGenerate() {
  // Reset Character Pool
  charPool.length = 0;
  // Check the character types the user want to include in the generated password and generate a new character pool
  if (includeLowercase.checked){
    charPool.push(...lowerCases);
  }
  if (includeUppercase.checked){
    charPool.push(...upperCases);
  }
  if (includeNumbers.checked){
    charPool.push(...numbers);
  }
  if (includeSymbols.checked){
    charPool.push(...symbols);
  }
  // Shuffle character pool randomly
  for (let i = charPool.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = charPool[i];
    charPool[i] = charPool[j];
    charPool[j] = k;
  }
}
function pwdGenerate() {
  pwdLength = parseInt(charLength.value);
  pwd = "";
  for (let i = 0; i < pwdLength; i++) {
    let randIndex = Math.floor(Math.random() * charPool.length);
    pwd += charPool[randIndex];
  }
}
function pwdConditionsCheck(pwd) {
  let mustIncludeLowercase = false,
    mustIncludeUppercase = false,
    mustIncludeNumbers = false,
    mustIncludeSymbols = false,
    includeLowercaseCheck = /[a-z]/.test(pwd),
    includeUppercaseCheck = /[A-Z]/.test(pwd),
    includeNumbersCheck = /\d/.test(pwd),
    includeSymbolsCheck = /[^a-z|^A-Z|^0-9]/.test(pwd);
  if (includeLowercase.checked) {
    mustIncludeLowercase = true;
  }
  if (includeUppercase.checked) {
    mustIncludeUppercase = true;
  }
  if (includeNumbers.checked) {
    mustIncludeNumbers = true;
  }
  if (includeSymbols.checked) {
    mustIncludeSymbols = true;
  }
  if (
    mustIncludeLowercase === includeLowercaseCheck &&
    mustIncludeUppercase === includeUppercaseCheck &&
    mustIncludeNumbers === includeNumbersCheck &&
    mustIncludeSymbols === includeSymbolsCheck
  ) {
    return true;
  } else {
    return false;
  }
}
function updateResult(updatedResult) {
  result.innerHTML = updatedResult;
}
function pwdStrengthMeasurement(pwd) {
  let charTypeCount = 0;
  if (/[a-z]/.test(pwd)) {
    charTypeCount++;
  }
  if (/[A-Z]/.test(pwd)) {
    charTypeCount++;
  }
  if (/\d/.test(pwd)) {
    charTypeCount++;
  }
  if (/[^a-z|^A-Z|^0-9]/.test(pwd)) {
    charTypeCount++;
  }
  if (
    (pwd.length < 10 && charTypeCount < 3) ||
    (charTypeCount < 3)
    ) {
    return "Low";
  }
  if (
    (pwd.length <= 10 && charTypeCount == 3) ||
    (pwd.length > 10 && pwd.length < 16 && charTypeCount == 2)
  ) {
    return "Medium";
  }
  if (
    (pwd.length > 10 && charTypeCount >= 3) ||
    (charTypeCount > 3)
    ) {
    return "High";
  }
}

charLength.addEventListener("change", () => {
  charLengthUpdate();
});
window.addEventListener("load", () => {
  charLengthUpdate();
});
generateButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    // Check if the user checked at least one type of character type
    includeLowercase.checked === false &&
    includeUppercase.checked === false &&
    includeNumbers.checked === false &&
    includeSymbols.checked === false
  ) {
    warningMessage.innerHTML =
      "You have to choose at least one type of characters to generate the password!";
  } else {
    charPoolGenerate();
    do {
      pwdGenerate();
    } while (!pwdConditionsCheck(pwd));
    warningMessage.innerHTML = "";
    updateResult(pwd);
    pwdStrength.innerHTML = pwdStrengthMeasurement(pwd);
    if (!result.classList.contains("show-result")) {
      result.classList.add("show-result");
    }
  }
});
