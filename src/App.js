import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { SwapRateContainer } from "./container/SwapRateContainer";

function App() {
  const [inputCountry, setInputCountry] = useState("INR");
  const [inputCurrency, setInputCurrency] = useState(1);
  const [toCountry, setToCountry] = useState("USD");
  const [toCurrency, setToCurrency] = useState(0);

  // Fetch exchange rates and update the DOM
  const calculate = () => {
    const currency_one = inputCountry;
    console.log("calculate -> currency_one", currency_one);
    const currency_two = toCountry;
    console.log("calculate -> currency_two", currency_two);

    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then((res) => {
        const rate = res.data.rates[currency_two];
        console.log("calculate -> rate", rate);
        setToCurrency((inputCurrency * rate).toFixed(2));
      });
  };
  useEffect(() => {
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputCountry, inputCurrency, toCountry]);

  const swapBtnClickHandler = () => {
    const changedToCountry = toCountry;
    console.log("swapBtnClickHandler -> changedToCountry", changedToCountry);
    setToCountry(inputCountry);
    setInputCountry(changedToCountry);
  };

  return (
    <>
      <div>
        <img src="../public/assets/money.png" alt="" className="money-img" />
        <h1>Exchange Rate Calculator</h1>
        <p>Choose the currency and the amounts to get the exchange rate</p>
        <div className="container">
          <div className="currency">
            <select
              value={inputCountry}
              onChange={(e) => setInputCountry(e.target.value)}
            >
              <option value="AED">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
            <input
              type="number"
              value={inputCurrency}
              onChange={(e) => setInputCurrency(parseInt(e.target.value))}
            />
            <br />
            <SwapRateContainer btnClickHandler={swapBtnClickHandler} />
          </div>
          <div className="currency">
            <select
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
            >
              <option value="AED">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
            <input
              type="number"
              onChange={(e) => parseInt(e.target.value)}
              value={toCurrency}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
