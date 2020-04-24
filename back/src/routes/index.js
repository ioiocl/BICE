// Import our Controllers
const quotesController = require('../controllers/quotesController')


const routes = [
  {
    method: 'GET',
    url: '/api/quotes',
    handler: quotesController.getQuotes
  }
]

module.exports = routes
