const inputFields = document.querySelectorAll(".input-field"),
      tipOptions = document.querySelectorAll(".percent-click"),
      customTipOption = document.querySelector("#custom"),
      billAmountInput = document.querySelector("#bill-amount"),
      peopleNumberInput = document.querySelector("#number-of-people"),
      tipDisplay = document.querySelector(".tip-display"),
      totalDisplay = document.querySelector(".total-display"),
      warning1 = document.querySelector("#bill-amount-warning"),  
      warning2 = document.querySelector("#tip-percent-warning"),  
      warning3 = document.querySelector("#number-of-people-warning"),
      resetBtn = document.querySelector("#reset")  
      ;

let tipPercent = 0,
    billAmount = 0,
    peopleNumber = 1,
    tipAmount = 0, 
    total = 0;
  
function updateTipPercent(e){
    if ( 
        /[^\d|^.|^%]/.test(e.target.innerHTML) ||
        e.target.innerHTML.trim() === ""
    ){
        warning2.innerHTML = "Invalid, you can only enter numbers!"
    } else {
        warning2.innerHTML = "";
        tipPercent = parseFloat(e.target.innerHTML);
        console.log(`Tip Percent: ${tipPercent}`)
    }
}

function updateBillAmount(e){
    if (
        /[^\d|^.]/.test(e.target.innerHTML) ||
        e.target.innerHTML.trim() === ""
        ){
        warning1.innerHTML = "Invalid bill number, you can only enter numbers!";
    } else {
        warning1.innerHTML = "";
        billAmount = parseFloat(e.target.innerHTML);
        console.log(`Bill Amount: ${billAmount}`)
    }
}

function updatePeopleNumber(e){
    if (
        /[^\d|^.]/.test(e.target.innerHTML) ||
        e.target.innerHTML.trim() === "" ||
        parseFloat(e.target.innerHTML) <= 0
    ){
        warning3.innerHTML = "Invalid, you can only enter numbers bigger than 0!"
    } else {
        warning3.innerHTML = "";
        peopleNumber = parseInt(e.target.innerHTML);
        console.log(`People Number: ${peopleNumber}`)
    }
}

function updateTotal(){
    total = billAmount / peopleNumber + tipAmount;
}

function updateTip(){
    tipAmount = (billAmount * tipPercent / 100) / peopleNumber;
}

function addingActiveStyle(e){
    e.currentTarget.classList.add("input-field-active");
}

function removeActiveStyle(e){
    e.currentTarget.classList.remove("input-field-active");
}

function tipOptionActive(e){
    for (let i = 0; i < tipOptions.length; i++){
        tipOptions[i].classList.remove("tip-percent-active");
    }
    e.currentTarget.classList.add("tip-percent-active");
    updateTipPercent(e);
}
function displayResults(){
        tipDisplay.innerHTML = `$${parseFloat(tipAmount).toFixed(2)}`;
        totalDisplay.innerHTML = `$${parseFloat(total).toFixed(2)}`;
}

function reset(){
    tipPercent = 0,
    billAmount = 0,
    peopleNumber = 1,
    tipAmount = 0, 
    total = 0;
    for (let i = 0; i < tipOptions.length; i++){
        tipOptions[i].classList.remove("tip-percent-active");
    }
    customTipOption.innerHTML = "Custom";
    billAmountInput.innerHTML = 0;
    peopleNumberInput.innerHTML = 1;
    tipDisplay.innerHTML = "$0.00";
    totalDisplay.innerHTML = "$0.00";
}

inputFields.forEach(field => {
    field.addEventListener("mouseover",(e)=>{
        addingActiveStyle(e);
    });
    field.addEventListener("mouseout", (e)=>{
        removeActiveStyle(e);
    });
});

tipOptions.forEach(tip => {
    tip.addEventListener("click", (e)=>{
            tipOptionActive(e);
            updateTip();
            updateTotal();
            displayResults();
        }
    );
});

customTipOption.addEventListener("input", (e)=>{
    tipOptionActive(e);
    updateTip();
    updateTotal();
    displayResults();
});

billAmountInput.addEventListener("input", (e)=>{
    updateBillAmount(e);
    updateTip();
    updateTotal();
    displayResults();
})
peopleNumberInput.addEventListener("input", (e)=>{
    updatePeopleNumber(e);
    updateTip();
    updateTotal();
    displayResults();
})
resetBtn.addEventListener("click", reset);