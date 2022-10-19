"use strict";
const charLength = document.querySelector("#character-length"),
  charLengthIndicator = document.querySelector("#character-length-indicator"),
  includeUppercase = document.querySelector("#include-uppercase"),
  includeLowercase = document.querySelector("#include-lowercase"),
  includeNumbers = document.querySelector("#include-numbers"),
  includeSymbols = document.querySelector("#include-symbols"),
  generateButton = document.querySelector("#generate"),
  result = document.querySelector("#result"),
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
  symbols = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ".split(""),
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
  if (
    includeLowercase.checked &&
    !includeUppercase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
  }
  if (
    !includeLowercase.checked &&
    includeUppercase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    charPool.push(...upperCases);
  }
  if (
    !includeLowercase.checked &&
    !includeUppercase.checked &&
    includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    charPool.push(...numbers);
  }
  if (
    !includeLowercase.checked &&
    !includeUppercase.checked &&
    !includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...symbols);
  }
  if (
    includeLowercase.checked &&
    includeUppercase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
    charPool.push(...upperCases);
  }
  if (
    includeLowercase.checked &&
    !includeUppercase.checked &&
    includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
    charPool.push(...numbers);
  }
  if (
    includeLowercase.checked &&
    !includeUppercase.checked &&
    !includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
    charPool.push(...symbols);
  }
  if (
    !includeLowercase.checked &&
    includeUppercase.checked &&
    includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    charPool.push(...upperCases);
    charPool.push(...numbers);
  }
  if (
    !includeLowercase.checked &&
    includeUppercase.checked &&
    !includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...upperCases);
    charPool.push(...symbols);
  }
  if (
    !includeLowercase.checked &&
    !includeUppercase.checked &&
    includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...numbers);
    charPool.push(...symbols);
  }
  if (
    includeLowercase.checked &&
    includeUppercase.checked &&
    includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
    charPool.push(...upperCases);
    charPool.push(...numbers);
  }
  if (
    includeLowercase.checked &&
    includeUppercase.checked &&
    !includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
    charPool.push(...upperCases);
    charPool.push(...symbols);
  }
  if (
    !includeLowercase.checked &&
    includeUppercase.checked &&
    includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...upperCases);
    charPool.push(...numbers);
    charPool.push(...symbols);
  }
  if (
    includeLowercase.checked &&
    !includeUppercase.checked &&
    includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
    charPool.push(...numbers);
    charPool.push(...symbols);
  }
  if (
    includeLowercase.checked &&
    includeUppercase.checked &&
    includeNumbers.checked &&
    includeSymbols.checked
  ) {
    charPool.push(...lowerCases);
    charPool.push(...upperCases);
    charPool.push(...numbers);
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

charLength.addEventListener("change", () => {
  charLengthUpdate();
});
window.addEventListener("load", () => {
  charLengthUpdate();
});
generateButton.addEventListener("click", (e) => {
  e.preventDefault();
  charPoolGenerate();
  do {
    pwdGenerate();
  } while (!pwdConditionsCheck(pwd));
  updateResult(pwd);
  console.log(clicked)
});
