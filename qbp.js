// This script is for interacting with the API.
//
// Get your own key at https://backpack.tf/developer/ and edit the API_KEY variable found at apikey.js.
//
const API_KEY = "YOUR KEY HERE";

let metalCurrency, metalPrice;

async function request() {
  var apiUrl = `https://backpack.tf/api/IGetCurrencies/v1?key=${API_KEY}`;
  var response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("No response from API.");
  }

  // This calls the API and collects data form the JSON.
  var data = await response.json();

  var metalPrice = data.response.currencies.metal.price.value;
  var metalCurrency = data.response.currencies.metal.price.currency;
  var keyPrice = data.response.currencies.keys.price.value;
  var keyCurrency = data.response.currencies.keys.price.currency;

  // This is the part where we inject the variables into the HTML elements.
  document.getElementById("metalNumber").textContent = metalPrice;
  document.getElementById("smallCurrencyMetal").textContent = metalCurrency;
  document.getElementById("keyNumber").textContent = keyPrice;
  document.getElementById("smallCurrencyKeys").textContent = keyCurrency;
}

request();
