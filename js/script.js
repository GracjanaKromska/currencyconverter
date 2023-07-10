{
    const calculateResult = (currency, exchange) => {
        const rateEUR = 4.4381;
        const rateUSD = 4.0767;
        const rateNOK = 0.3755;

        switch (exchange) {
            case "EUR":
                return currency / rateEUR;

            case "USD":
                return currency / rateUSD;

            case "NOK":
                return currency / rateNOK;
        }
    };

    const updateResultText = (currency, exchange, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${currency} PLN = ${result.toFixed(2)} ${exchange}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const exchangeElement = document.querySelector(".js-exchange");

        const currency = +currencyElement.value;
        const exchange = exchangeElement.value;

        const result = calculateResult(currency, exchange);

        updateResultText(currency, exchange, result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}