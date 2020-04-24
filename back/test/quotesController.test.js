const assert = require('assert');
const quotesController = require('../src/controllers/quotesController')
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

jest.mock('axios');

describe('Test', function() {


  describe('Cooper trades',  function() {
    it('Should return a list of historic stock price with SMA', async function() {

      let mock = new MockAdapter(axios);
      mock.onGet('https://www.indecon.online/values/cobre').reply(200, data);
      let list = await quotesController.getQuotes()
      assert.equal(list().length, 3);



    });
  });
});


const data = {
    "key": "cobre",
    "name": "Precio del Cobre, dólares por libra",
    "unit": "dolar",
    "values": {
    "1546387200": 2.71,
    "1546473600": 2.7,
    "1546560000": 2.64,
    "1546819200": 2.59,
    "1546905600": 2.68,
    "1546992000": 2.68,
    "1547078400": 2.67,
    "1547164800": 2.69,
    "1547424000": 2.68,
    "1547510400": 2.69,
    "1547596800": 2.66,
    "1547683200": 2.67,
    "1547769600": 2.69,
    "1548028800": 2.71,
    "1548115200": 2.74,
    "1548201600": 2.7,
    "1548288000": 2.68,
    "1548374400": 2.69,
    "1548633600": 2.67,
    "1548720000": 2.74,
    "1548806400": 2.71,
    "1548892800": 2.74,
    "1548979200": 2.78,
    "1549238400": 2.79,
    "1549324800": 2.77,
    "1549411200": 2.79,
    "1549497600": 2.82,
    "1549584000": 2.84,
    "1549843200": 2.83,
    "1549929600": 2.81,
    "1550016000": 2.78,
    "1550102400": 2.76,
    "1550188800": 2.78,
    "1550448000": 2.78,
    "1550534400": 2.81,
    "1550620800": 2.87,
    "1550707200": 2.88,
    "1550793600": 2.92,
    "1551052800": 2.9,
    "1551139200": 2.96,
    "1551225600": 2.96,
    "1551312000": 2.96,
    "1551398400": 2.97,
    "1551657600": 2.97,
    "1551744000": 2.96,
    "1551830400": 2.93,
    "1551916800": 2.97
    }
}