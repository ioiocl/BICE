// Import our Controllers
const carController = require('../controllers/quotesController')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

const routes = [
  {
    method: 'GET',
    url: '/api/quotes',
    handler: carController.getQuotes
  }
]

module.exports = routes
