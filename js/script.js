{
  const CalculateCurrency = (currencyPair, amount) => {
    let rate;
    switch (currencyPair) {
      case "PLN/USD":
        rate = 0.22;
        return rate * amount;
      case "PLN/EUR":
        rate = 0.21;
        return rate * amount;
      case "USD/PLN":
        rate = 4.43;
        return rate * amount;
      case "USD/EUR":
        rate = 0.94;
        return rate * amount;
      case "EUR/PLN":
        rate = 4.69;
        return rate * amount;
      case "EUR/USD":
        rate = 1.06;
        return rate * amount;
      default:
        return 1 * amount;
    }
  };
  const resultUpdate = () => {
    const resultElement = document.querySelector(".js-result");
    const inputCash = document.querySelector(".js-cash");
    const amount = inputCash.value;
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
    const outputCurrencyElement = document.querySelector(".js-outputCurrency");
    const currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`;
    const result = CalculateCurrency(currencyPair, amount);
    resultElement.innerText = `${inputCash.value} ${
      inputCurrencyElement.value
    } = ${result.toFixed(2)} ${outputCurrencyElement.value}`;
  };
  const init = () => {
    const formElement = document.querySelector(".js-form");
    const resultContainerElement = document.querySelector(
      ".js-resultContainer"
    );
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      if (resultContainerElement.classList.contains("form__resultContainer")) {
        resultContainerElement.classList.remove("form__resultContainer");
      }
      resultUpdate();
    });
  };
  init();
}
