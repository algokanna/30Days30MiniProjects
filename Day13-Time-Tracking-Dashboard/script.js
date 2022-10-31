const timeOptions = document.querySelectorAll("#time-options>*"),
  dailyBtn = document.querySelector("#daily-btn"),
  weeklyBtn = document.querySelector("#weekly-btn"),
  monthlyBtn = document.querySelector("#monthly-btn");

for (option of timeOptions) {
  option.addEventListener("click", (e) => {
    options = e.target.parentElement.children;
    for (option_ of options) {
      option_.classList.remove("time-option-active");
    }
    e.target.classList.add("time-option-active");
  });
}

async function updateTimeTrackingCardsDaily() {
  const userData = await fetchData();  
  const timeTrackingCards = document.querySelectorAll(".time-tracking-card h3");
  timeTrackingCards.forEach((card) => {
    userData.forEach((trackingType) => {
      if (card.innerHTML === trackingType.title) {
        card.parentElement.parentElement.querySelector(
          ".time-tracking-display"
        ).innerHTML = `${trackingType.timeframes.daily.current}hrs`;
        card.parentElement.parentElement.querySelector(
          ".time-tracking-history"
        ).innerHTML = `Yesterday - ${trackingType.timeframes.daily.previous}hrs`;
      }
    });
  });
}
async function updateTimeTrackingCardsWeekly() {
  const userData = await fetchData();  
  const timeTrackingCards = document.querySelectorAll(".time-tracking-card h3");
  timeTrackingCards.forEach((card) => {
    userData.forEach((trackingType) => {
      if (card.innerHTML === trackingType.title) {
        card.parentElement.parentElement.querySelector(
          ".time-tracking-display"
        ).innerHTML = `${trackingType.timeframes.weekly.current}hrs`;
        card.parentElement.parentElement.querySelector(
          ".time-tracking-history"
        ).innerHTML = `Last Week - ${trackingType.timeframes.weekly.previous}hrs`;
      }
    });
  });
}
async function updateTimeTrackingCardsMonthly() {
  const userData = await fetchData();  
  const timeTrackingCards = document.querySelectorAll(".time-tracking-card h3");
  timeTrackingCards.forEach((card) => {
    userData.forEach((trackingType) => {
      if (card.innerHTML === trackingType.title) {
        card.parentElement.parentElement.querySelector(
          ".time-tracking-display"
        ).innerHTML = `${trackingType.timeframes.monthly.current}hrs`;
        card.parentElement.parentElement.querySelector(
          ".time-tracking-history"
        ).innerHTML = `Last Month - ${trackingType.timeframes.monthly.previous}hrs`;
      }
    });
  });
}

async function fetchData() {
  const response = await fetch("https://algokanna.github.io/data/data.json");
  if (response.ok === false) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  return data;
}

dailyBtn.addEventListener("click", updateTimeTrackingCardsDaily);
weeklyBtn.addEventListener("click", updateTimeTrackingCardsWeekly);
monthlyBtn.addEventListener("click", updateTimeTrackingCardsMonthly);
