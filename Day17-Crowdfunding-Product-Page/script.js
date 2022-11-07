class Product {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
  }
}
const totalPledge = {
  currentPledge: 89914,
  goal: 100000,
  totalBackers: 5007,
  dayLeft: 56
};
const bambooStand = new Product("Bamboo Stand", 101);
const blackEditionStand = new Product("Black Edition Stand", 64);
const mahagonySpecialEdition = new Product("Mahagony Special Edition", 10);

function updateCurrentProgress() {
  const { currentPledge, goal, totalBackers, dayLeft } = totalPledge;
  const currentProgress = document.querySelector(".current-progress");
  currentProgress.style.width = `${Math.round((currentPledge / goal) * 100)}%`;
  document.querySelector(".back-value").innerHTML = currentPledge;
  document.querySelector(".backer-number").innerHTML = totalBackers;
  document.querySelector(".goal").innerHTML = goal;
  document.querySelector(".day-left").innerHTML = dayLeft;
}

function updateCurrentProductStock(){
    const bambooStandStock = document.querySelector("#bamboo-stand-stock");
    const blackEditionStandStock = document.querySelector("#black-edition-stand-stock");
    const mahagonySpecialEditionStock = document.querySelector("#mahagony-special-edition-stock");

    bambooStandStock.innerHTML = `${bambooStand.stock}`;
    blackEditionStandStock.innerHTML = `${blackEditionStand.stock}`;
    mahagonySpecialEditionStock.innerHTML = `${mahagonySpecialEdition.stock}`;

    if (bambooStand.stock === 0){
        bambooStandStock.parentElement.parentElement.classList.add("out-of-stock");
        bambooStandStock.parentElement.parentElement.querySelector(".select-reward").innerHTML = "Out of stock";
    } else {
        bambooStandStock.parentElement.parentElement.classList.remove("out-of-stock");
        bambooStandStock.parentElement.parentElement.querySelector(".select-reward").innerHTML = "Select reward";
    }
    if (blackEditionStand.stock === 0){
        blackEditionStandStock.parentElement.parentElement.classList.add("out-of-stock");
        blackEditionStandStock.parentElement.parentElement.querySelector(".select-reward").innerHTML = "Out of stock";
    } else {
        blackEditionStandStock.parentElement.parentElement.classList.remove("out-of-stock");
        blackEditionStandStock.parentElement.parentElement.querySelector(".select-reward").innerHTML = "Select reward";
    }
    if (mahagonySpecialEdition.stock === 0){
        mahagonySpecialEditionStock.parentElement.parentElement.classList.add("out-of-stock");
        mahagonySpecialEditionStock.parentElement.parentElement.querySelector(".select-reward").innerHTML = "Out of stock";
    } else {
        mahagonySpecialEditionStock.parentElement.parentElement.classList.remove("out-of-stock");
        mahagonySpecialEditionStock.parentElement.parentElement.querySelector(".select-reward").innerHTML = "Select reward";
    }
}

function triggerPledgeSubmit(e) {
  const pledgeCard = e.target.parentElement.parentElement;
  const divider = pledgeCard.querySelector(".divider");
  const bottomPart = pledgeCard.querySelector(".bottom-part");
  pledgeCard.classList.add("pledge-card-active");
  divider.classList.remove("hide");
  bottomPart.classList.remove("hide");
}

function hidePledgeSubmit() {
  const pledgeCards = document.querySelectorAll(".pledge-card-2");
  pledgeCards.forEach((pledgeCard) => {
    pledgeCard.classList.remove("pledge-card-active");
    pledgeCard.querySelector(".divider").classList.add("hide");
    pledgeCard.querySelector(".bottom-part").classList.add("hide");
  });
}

function triggerBackingDialogue() {
  const mainElement = document.querySelector("main");
  mainElement.insertAdjacentHTML(
    "afterend",
    `
    <div class="overlay flex">
    <div class="back-this-project-dialogue flex">
        <h3>Back this project</h3>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <img src="./assets/icon-close-modal.svg" alt="close icon" class="close-icon">
        
        <div class="fixed-height-wrapper">
            <div class="flex column gap-1r pledge-options">
                <div class="pledge-card-2 flex">
                    <div class="flex row space-between align-start top-part">
                        <input type="radio" name="pledge-option" id="pledge-no-reward">
                        <div class="wrapper-95 flex row space-between align-center gap-1r">
                            <div class="flex row product-title align-center">
                                <h3 class="product-name">Pledge with no reward</h3>
                            </div>
                            <p class="product-description">Choose to support us without a reward if you simply believe in our project. As a backer, you'll be signed up to receive product updates via email.</p>
                        </div>
                    </div>
                    <div class="divider hide"></div>
                    <div class="wrapper-full flex row space-between align-center bottom-part hide">
                        <p>Enter your pledge</p>
                        <div class="flex row align-center gap-1r">
                            <div class="flex row align-center gap-half-r pledge-value-input">
                                <span>$</span>
                                <span contenteditable="true" class="money-input">25</span>
                            </div>
                            <button class="submit-pledge" onclick="submitPledge(event)">Continue</button>
                        </div>
                    </div>
                </div>

                <div class="pledge-card-2 ${
                 bambooStand.stock === 0 ? "out-of-stock-2 " : ""
                }flex">
                    <div class="flex row space-between align-start top-part">
                        <input type="radio" name="pledge-option" id="pledge-25">
                        <div class="wrapper-95 flex row space-between align-center gap-1r">
                            <div class="flex row product-title align-center">
                                <h3 class="product-name">${
                                  bambooStand.name
                                }</h3>
                                <p class="pledge-value">Pledge $25 or more</p>
                            </div>
                            <div class="item-left flex align-center"><p>${
                              bambooStand.stock
                            }</p> <span>left</span></div>
                            <p class="product-description">You get an ergonimic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
                        </div>
                    </div>
                    <div class="divider hide"></div>
                    <div class="wrapper-full flex row space-between align-center bottom-part hide">
                        <p>Enter your pledge</p>
                        <div class="flex row align-center gap-1r">
                            <div class="flex row align-center gap-half-r pledge-value-input">
                                <span>$</span>
                                <span contenteditable="true" class="money-input">25</span>
                            </div>
                            <button class="submit-pledge" onclick="submitPledge(event)">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="pledge-card-2 ${
                    blackEditionStand.stock === 0 ? "out-of-stock-2 " : ""
                }flex">
                    <div class="flex row space-between align-start top-part">
                        <input type="radio" name="pledge-option" id="pledge-75">
                        <div class="wrapper-95 flex row space-between align-center gap-1r">
                            <div class="flex row product-title align-center">
                                <h3 class="product-name">${
                                  blackEditionStand.name
                                }</h3>
                                <p class="pledge-value">Pledge $75 or more</p>
                            </div>
                            <div class="item-left flex align-center"><p>${
                              blackEditionStand.stock
                            }</p> <span>left</span></div>
                            <p class="product-description">You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                        </div>
                    </div>
                    <div class="divider hide"></div>
                    <div class="wrapper-full flex row space-between align-center bottom-part hide">
                        <p>Enter your pledge</p>
                        <div class="flex row align-center gap-1r">
                            <div class="flex row align-center gap-half-r pledge-value-input">
                                <span>$</span>
                                <span contenteditable="true" class="money-input">75</span>
                            </div>
                            <button class="submit-pledge" onclick="submitPledge(event)">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="pledge-card-2 ${
                  mahagonySpecialEdition.stock === 0 ? "out-of-stock-2 " : ""
                } flex">
                    <div class="flex row space-between align-start top-part">
                        <input type="radio" name="pledge-option" id="pledge-200">
                        <div class="wrapper-95 flex row space-between align-center gap-1r">
                            <div class="flex row product-title align-center">
                                <h3 class="product-name">${
                                  mahagonySpecialEdition.name
                                }</h3>
                                <p class="pledge-value">Pledge $200 or more</p>
                            </div>
                            <div class="item-left flex align-center"><p>${
                              mahagonySpecialEdition.stock
                            }</p> <span>left</span></div>
                            <p class="product-description">You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                        </div>
                    </div>
                    <div class="divider hide"></div>
                    <div class="wrapper-full flex row space-between align-center bottom-part hide">
                        <p>Enter your pledge</p>
                        <div class="flex row align-center gap-1r">
                            <div class="flex row align-center gap-half-r pledge-value-input">
                                <span>$</span>
                                <span contenteditable="true" class="money-input">200</span>
                            </div>
                            <button class="submit-pledge" onclick="submitPledge(event)">Continue</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div
    `
  );

  const radioBoxes = document.querySelectorAll("input[type='radio']");

  radioBoxes.forEach((radioBox) => {
    radioBox.addEventListener("input", (e) => {
      hidePledgeSubmit();
      if (e.target.checked) {
        triggerPledgeSubmit(e);
      }
    });
  });

  const closeIcon = document.querySelector(".close-icon");
  closeIcon.addEventListener("click", (e) => {
    removeDialogue(e);
  });
}

function removeDialogue(e) {
  e.target.parentElement.parentElement.remove();
}

function triggerThankyouDialogue(){
  const mainElement = document.querySelector("main");
  mainElement.insertAdjacentHTML('afterend',`    
    <div class="overlay flex">
        <div class="flex column align-center thank-you-card">
            <img src="./assets/icon-check.svg" alt="check icon">
            <h4>Thank you for your support</h4>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You'll get an email once our campaign is completed.</p>
            <button class="confirm">Got it</button>
        </div>
    </div>
  `);
  const confirmBtn = document.querySelector(".confirm");
  confirmBtn.addEventListener("click", (e) => {
    removeDialogue(e);
  });
}
function submitPledge(e){
    const pledgeCard = e.target.parentElement.parentElement.parentElement;
    const productName = pledgeCard.querySelector(".product-name");
    const pledgeValue = pledgeCard.querySelector(".money-input");

    totalPledge.currentPledge += parseInt(pledgeValue.innerHTML);
    totalPledge.totalBackers ++;

    if (productName.innerHTML === "Bamboo Stand"){
        bambooStand.stock --;
    }
    if (productName.innerHTML === "Black Edition Stand"){
        blackEditionStand.stock --;
    }
    if (productName.innerHTML === "Mahagony Special Edition"){
        mahagonySpecialEdition.stock --;
    }
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    triggerThankyouDialogue();
    updateCurrentProgress();
    updateCurrentProductStock();
}
updateCurrentProgress();
updateCurrentProductStock();

const backThisProjectBtn = document.querySelector("#back-this-project");
backThisProjectBtn.addEventListener("click", triggerBackingDialogue);

const selectRewardBtns = document.querySelectorAll(".select-reward");
selectRewardBtns.forEach(btn => {
    btn.addEventListener("click", triggerBackingDialogue);
});
