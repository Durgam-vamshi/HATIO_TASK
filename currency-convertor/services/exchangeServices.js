
const axios = require('axios');

const API_KEY = process.env.API_KEY;  
const BASE_URL = 'https://openexchangerates.org/api/';

let cache = new Map();

const getExchangeRates = async (base = 'USD') => {
  const cacheKey = `rates_${base}`;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);  
  }

  try {
    const response = await axios.get(`${BASE_URL}latest.json?app_id=${API_KEY}&base=${base}`);

    if (response.data.error) {
      throw new Error('Error in API response');
    }
    cache.set(cacheKey, response.data.rates);
    return response.data.rates;
  } catch (err) {
    if (err.response) {
      throw new Error(`External API Error: ${err.response.status} - ${err.response.data}`);
    } else if (err.request) {
      throw new Error('Network error: No response from API');
    } else {
      throw new Error(`Error while fetching exchange rates: ${err.message}`);
    }
  }
};

const convertCurrency = async (from, to, amount) => {
  try {
    const rates = await getExchangeRates(from);

    if (!rates[to]) {
      throw new Error(`Invalid currency code: ${to}`);
    }
    return amount * rates[to];
  } catch (err) {
    throw new Error(`Currency conversion failed: ${err.message}`);
  }
};

module.exports = { getExchangeRates, convertCurrency };
