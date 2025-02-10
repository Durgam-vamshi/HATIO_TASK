# 💱 Currency Converter API

## 📌 Description
This is a **Node.js-based Currency Converter API** that allows users to retrieve exchange rates and convert between different currencies. It integrates with the **Open Exchange Rates API** to fetch real-time currency exchange rates and provides an endpoint for currency conversion.

## ✨ Features
✅ Fetch the latest exchange rates for a given base currency.
✅ Convert an amount from one currency to another.
✅ Rate limiting to prevent abuse.
✅ Caching mechanism to optimize API calls.
✅ Input validation with Joi.
✅ Error handling for robustness.

## 🛠 Technologies Used
- 🚀 **Node.js**
- 🏗 **Express.js**
- 🗄 **SQLite3** (for storing conversion records)
- 🌍 **Axios** (for API requests)
- 🔑 **dotenv** (for environment variables)
- 🔗 **cors** (for Cross-Origin Resource Sharing)
- 📜 **morgan** (for logging HTTP requests)
- 🚦 **express-rate-limit** (for request limiting)
- 📏 **Joi** (for input validation)
- 🧠 **node-cache** (for caching exchange rates)

## 📥 Installation
### Prerequisites
- 🟢 **Node.js (v14 or higher)**
- 📦 **NPM or Yarn**

### Steps
1. 📂 Clone the repository:
   ```sh
   git clone https://github.com/your-repo/currency-converter.git
   cd currency-converter
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. 📝 Set up the `.env` file:
   ```sh
   API_KEY=your_open_exchange_rates_api_key
   PORT=5000
   ```
4. ▶ Run the server:
   ```sh
   npm start
   ```

## 🔗 API Endpoints
### 📊 Get Exchange Rates
- **Endpoint:** `GET /api/rates?base=USD`
- **Query Parameters:**
  - `base` (optional) - The base currency (default: USD)
- **Response:**
  ```json
  {
    "base": "USD",
    "rates": {
      "EUR": 0.85,
      "INR": 74.5,
      "GBP": 0.75
    }
  }
  ```

### 🔄 Convert Currency
- **Endpoint:** `POST /api/convert`
- **Request Body:**
  ```json
  {
    "from": "USD",
    "to": "EUR",
    "amount": 100
  }
  ```
- **Response:**
  ```json
  {
    "from": "USD",
    "to": "EUR",
    "amount": 100,
    "convertedAmount": 85
  }
  ```

## ⚠ Error Handling
- ❌ **400 Bad Request**: Invalid input parameters.
- ❌ **500 Internal Server Error**: Unexpected server errors.
- ⏳ **429 Too Many Requests**: Rate limit exceeded.

## 🚀 Future Enhancements
- 🔐 **User authentication** for tracking conversions.
- 📅 **Support for historical exchange rates.**
- 🌐 **Web UI for easy access.**

## 📜 License
This project is open-source and available under the **MIT License**.

---
📌 *Feel free to contribute to this project and improve its features!* 🚀

