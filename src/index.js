const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/**
 * Status endpoint
 */
app.get('/status', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'running' }));
  
})

/**
 * pay endpoint handling dummy pay requests (integration testing)
 */
app.get('/pay', (req, res) => {
  const amount = Number(req.query.amount);

  res.setHeader('Content-Type', 'application/json');

  if(amount <= 0){
    // amount must be positive
    res.end(JSON.stringify({success: false, error: 'Illegal amount type! Please provide a positive number!'}));
    res.status(400);
  }else{
    // do the calculation of amount + 2
    var result = pay(amount);
    res.end(JSON.stringify({success: true, result: result}));
  }
})

const server = app.listen(port, () => {
  console.log(`CICO example for Azure App Service listening on port ${port}`)
})

/**
 * dummy function for unit tests
 * 
 * @returns a + 2
 */
function pay(a){
  return a + 2;
}

module.exports.app = app
module.exports.server = server
module.exports.pay = pay