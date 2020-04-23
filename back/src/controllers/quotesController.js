// External Dependancies
const boom = require('boom')

// Get Data Models
const fetch = require("node-fetch");
const moment = require("moment");
var tulind = require('tulind');
const url = "https://www.indecon.online/values/cobre";

// Get all cars
exports.getQuotes = async (req, reply) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    var list = [];
    Object.keys(json.values).forEach(key => {
      var sma = {date : moment.unix(key).format("DD/MM/YYYY"),
                 spot : json.values[key]}
      list.push(sma)
      
  })

  let spot = list.reduce((acc, val)=>[...acc, val.spot], [])
  let sma5 = await tulind.indicators.sma.indicator([spot], [5]);
  let sma20 = await tulind.indicators.sma.indicator([spot], [20]);
 
  sma5 = sma5[0].splice(16, sma5[0].length)
  sma20 = sma20[0]
  spot.splice(0,19)
  list.splice(0,19)

  list.forEach((tick, index) => {
    tick.sma5 = sma5[index];
    tick.sma20 = sma20[index];
  });

    return list
  } catch (err) {
    throw boom.boomify(err)
  }
}

