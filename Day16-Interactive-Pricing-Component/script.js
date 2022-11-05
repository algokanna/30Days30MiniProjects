function billingOptionState() {
  const yearlyBilling = document.querySelector("#yearly-billing");
  let billingOption = yearlyBilling.checked
    ? "yearly billing"
    : "monthly billing";
  return billingOption;
}

function updatePrice() {
  const billingOptions = document.querySelector("#yearly-billing");
  const pageview = document.querySelector(".pageview");
  const price = document.querySelector(".price");
  const priceSlider = document.querySelector("#price-slider");

  let billingOption = billingOptionState();
  let priceInput = parseInt(priceSlider.value);

  if (billingOption === "yearly billing") {
    if (priceInput === 8) {
      pageview.innerHTML = `120K pageviews`;
      price.innerHTML = `$${Math.round(
        priceInput * 12 * 0.75
      )}.00 <span class="time-period">/ year</span>`;
    }
    if (priceInput === 12) {
      pageview.innerHTML = `600K pageviews`;
      price.innerHTML = `$${Math.round(
        priceInput * 12 * 0.75
      )}.00 <span class="time-period">/ year</span>`;
    }
    if (priceInput === 16) {
      pageview.innerHTML = `1.2M pageviews`;
      price.innerHTML = `$${Math.round(
        priceInput * 12 * 0.75
      )}.00 <span class="time-period">/ year</span>`;
    }
    if (priceInput === 24) {
      pageview.innerHTML = `6M pageviews`;
      price.innerHTML = `$${Math.round(
        priceInput * 12 * 0.75
      )}.00 <span class="time-period">/ year</span>`;
    }
    if (priceInput === 36) {
      pageview.innerHTML = `12M pageviews`;
      price.innerHTML = `$${Math.round(
        priceInput * 12 * 0.75
      )}.00 <span class="time-period">/ year</span>`;
    }
  } else {
    if (priceInput === 8) {
      pageview.innerHTML = `10K pageviews`;
      price.innerHTML = `$${priceInput}.00 <span class="time-period">/ month</span>`;
    }
    if (priceInput === 12) {
      pageview.innerHTML = `50K pageviews`;
      price.innerHTML = `$${priceInput}.00 <span class="time-period">/ month</span>`;
    }
    if (priceInput === 16) {
      pageview.innerHTML = `100K pageviews`;
      price.innerHTML = `$${priceInput}.00 <span class="time-period">/ month</span>`;
    }
    if (priceInput === 24) {
      pageview.innerHTML = `500K pageviews`;
      price.innerHTML = `$${priceInput}.00 <span class="time-period">/ month</span>`;
    }
    if (priceInput === 36) {
      pageview.innerHTML = `1M pageviews`;
      price.innerHTML = `$${priceInput}.00 <span class="time-period">/ month</span>`;
    }
  }
}

const priceSlider = document.querySelector("#price-slider");
priceSlider.addEventListener("input", updatePrice);

function reponsive() {
  if (window.innerWidth <= 500) {
    document.querySelector(".pricing-card").innerHTML = `
        <div class="top-part column-space-between flex">
            <p class="pageview">100k Pageviews</p>
            <div class="price-slider">
            <input type="range" id="price-slider" min="8" max="36" step="4" value="8" onchange="console.log(this.value)">
            <div class="slider-thumb"></div>
            <div class="slider-progress"></div>
            </div>
            <p class="price flex">$16.00 <span class="time-period">/ month</span></p>
            <div class="billing-options row-flex-end flex">
                <div class="monthly-billing">Monthly Billing</div>
                <label class="switch">
                    <input type="checkbox" id="yearly-billing">
                    <span class="slider round"></span>
                  </label>
                  <div class="yearly-billing">
                    Yearly Billing 
                    <span class="discount">-25%</span>
                  </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="bottom-part column-space-between flex">
            <ul class="column-space-between flex">
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
            </ul>
            <button>Start my trial</button>
        </div>
        `;
  } else if (window.innerWidth > 500) {
    document.querySelector(".pricing-card").innerHTML = `
    <div class="top-part column-space-between flex">
                <div class="row-space-between flex">
                    <p class="pageview">100k Pageviews</p>
                    <p class="price flex">$16.00 <span class="time-period">/ month</span></p>
                </div>
                <div class="price-slider">
                    <input type="range" id="price-slider" min="8" max="36" step="4" value="8" onchange="console.log(this.value)">
                    <div class="slider-thumb"></div>
                    <div class="slider-progress"></div>
                </div>
                <div class="billing-options row-flex-end flex">
                    <div class="monthly-billing">Monthly Billing</div>
                    <label class="switch">
                        <input type="checkbox" id="yearly-billing">
                        <span class="slider round"></span>
                      </label>
                      <div class="yearly-billing">
                        Yearly Billing 
                        <span class="discount">25% Discount</span>
                      </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="bottom-part row-space-between flex">
                <ul class="column-space-between flex">
                    <li>Unlimited websites</li>
                    <li>100% data ownership</li>
                    <li>Email reports</li>
                </ul>
                <button>Start my trial</button>
            </div>
    `;
  }
  const priceSlider = document.querySelector("#price-slider");
  priceSlider.addEventListener("input", updatePrice);
}

window.addEventListener("load", reponsive);
window.addEventListener("resize", reponsive);
