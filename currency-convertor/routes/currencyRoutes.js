const express = require('express');
const router = express.Router();
const { getRates, convert } = require('../controllers/currencyController');

router.get('/rates', getRates);
router.post('/convert', convert);

module.exports = router;
