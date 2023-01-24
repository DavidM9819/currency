let inputCash = document.querySelector(".js-cash");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let resultContainerElement = document.querySelector(".js-resultContainer");
let form__buttonElement = document.querySelector(".js-form__button");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (resultContainerElement.classList.contains("form__resultContainer")) {
    resultContainerElement.classList.remove("form__resultContainer");
  }
  let currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`;
  let rate;

  switch (currencyPair) {
    case "PLN/USD":
      rate = 0.22;
      break;
    case "PLN/EUR":
      rate = 0.21;
      break;
    case "USD/PLN":
      rate = 4.43;
      break;
    case "USD/EUR":
      rate = 0.94;
      break;
    case "EUR/PLN":
      rate = 4.69;
      break;
    case "EUR/USD":
      rate = 1.06;
      break;
    default:
      rate = 1;
  }

  let amount = inputCash.value;
  let result = amount * rate;

  resultElement.innerText = `${inputCash.value} ${
    inputCurrencyElement.value
  } = ${result.toFixed(2)} ${outputCurrencyElement.value}`;
});
