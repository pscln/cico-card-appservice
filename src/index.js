const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/**
 * add endpoint handling dummy add requests (integration testing)
 */
app.get('/add', (req, res) => {
  const amount = Number(req.query.amount);

  res.setHeader('Content-Type', 'application/json');

  if(amount <= 0){
    // amount must be positive
    res.status(400);
    res.end(JSON.stringify({success: false, error: 'Hallo!'}));
  }else{
    // do the calculation of amount + 2
    var result = add(amount);
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
function add(a){
  return a + 2;
}

module.exports.app = app
module.exports.server = server
module.exports.add = add