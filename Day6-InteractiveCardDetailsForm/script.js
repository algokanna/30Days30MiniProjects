const cardholderDisplay = document.querySelector("#cardholder-name-display"),
      cardNumberDisplay = document.querySelector("#card-number-display"),
      expireMonthDisplay = document.querySelector("#expire-month-display"),
      expireYearDisplay = document.querySelector("#expire-year-display"),
      cvcDisplay = document.querySelector("#cvc-display"),
      cardHolderName = document.querySelector("#card-holder-name"),
      cardNumber = document.querySelector("#card-number"),
      expireMonth = document.querySelector("#expire-month"),
      expireYear = document.querySelector("#expire-year"),
      cvc = document.querySelector("#cvc"),
      cardDetailsForm = document.querySelector("#card-details"),
      completedState = document.querySelector("#completed-state"),
      resetButton = document.querySelector("#continue"),
      warningMessage1 = document.querySelector("#warning-message-1"),
      warningMessage2 = document.querySelector("#warning-message-2"),
      warningMessage3 = document.querySelector("#warning-message-3"),
      warningMessage4 = document.querySelector("#warning-message-4")
      ;
cardHolderName.addEventListener("keyup", (e)=>{
    cardholderDisplay.innerHTML = e.target.value;
});
cardNumber.addEventListener("keyup", (e)=>{
    let cardNumberInput = e.target.value.toString(),
        cardNumberOutput = "";
    for(let i = 0; i < cardNumberInput.length; i++){
        cardNumberOutput += cardNumberInput[i];
        if ((i+1)%4 === 0){
            cardNumberOutput+= " ";
        }
    }
    cardNumberDisplay.innerHTML = cardNumberOutput;
});

expireMonth.addEventListener("keyup", (e)=>{
    expireMonthDisplay.innerHTML = e.target.value;
});

expireYear.addEventListener("keyup", (e)=>{
    expireYearDisplay.innerHTML = e.target.value
});

cvc.addEventListener("keyup", (e)=>{
    cvcDisplay.innerHTML = e.target.value;
});

cardDetailsForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let validationPass = true;
    if (/^[a-z\s]/.test(cardHolderName.value.trim()) &&
        /^[A-Z\s]/.test(cardHolderName.value.trim())){
        warningMessage1.innerHTML = "Wrong format, letters and space only!";
        validationPass = false;
    } else {
        warningMessage1.innerHTML = "";
        validationPass = true;
    }
    if (cardNumber.value.length !== 16){
        warningMessage2.innerHTML = "Wrong format, must include 16 digits!";
        validationPass = false
    } else {
        warningMessage2.innerHTML = "";
        validationPass = true;
    }
    if (validationPass){
        if(cardDetailsForm.classList.contains("show")){
            cardDetailsForm.classList.add("hide");
            cardDetailsForm.classList.remove("show");
            completedState.classList.add("show");
            completedState.classList.remove("hide");
        }
    }
});

resetButton.addEventListener("click", (e)=>{
    cardDetailsForm.classList.add("show");
    cardDetailsForm.classList.remove("hide");
    completedState.classList.add("hide");
    completedState.classList.remove("show");
    cardHolderName.value = "";
    cardNumber.value = "";
    expireMonth.value = "";
    expireYear.value = "";
    cvc.value = "";
    cardholderDisplay.innerHTML = "Jane Appleseed";
    cardNumberDisplay.innerHTML = "0000 0000 0000 0000";
    expireMonthDisplay.innerHTML = "00";
    expireYearDisplay.innerHTML = "00";
    cvcDisplay.innerHTML = "000";
});