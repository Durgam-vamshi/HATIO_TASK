require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const NodeCache = require('node-cache');
const currencyRoutes = require('./currency-convertor/routes/currencyRoutes');
const db = require('./currency-convertor/config/db');  

const app = express();

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Too many requests from this IP, please try again later."
});

app.use('/api/', limiter);

app.use('/api', currencyRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
