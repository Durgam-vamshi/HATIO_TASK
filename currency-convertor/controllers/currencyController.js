const Joi = require('joi');
const { getExchangeRates, convertCurrency } = require('../services/exchangeServices');
const conversionSchema = Joi.object({
  from: Joi.string().length(3).uppercase().required(),
  to: Joi.string().length(3).uppercase().required(),
  amount: Joi.number().positive().required()
});

exports.convert = async (req, res) => {
  const { from, to, amount } = req.body;

  const { error } = conversionSchema.validate({ from, to, amount });
  if (error) {
    return res.status(400).json({
      error: 'Invalid input',
      message: error.details[0].message,
    });
  }

  try {
    const convertedAmount = await convertCurrency(from, to, amount);
    res.json({
      from,
      to,
      amount,
      convertedAmount,
    });
  } catch (err) {
    if (err.message.includes('Invalid currency code')) {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: 'Currency conversion failed', details: err.message });
  }
};
exports.getRates = async (req, res) => {
  const base = req.query.base || 'USD'; 

  try {
    const rates = await getExchangeRates(base);
    res.json({
      base,
      rates,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exchange rates', details: err.message });
  }
};
