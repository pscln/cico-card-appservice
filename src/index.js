const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/status', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'running' }));
})

const server = app.listen(port, () => {
  console.log(`CICO example for Azure App Service listening on port ${port}`)
})

module.exports.app = app
module.exports.server = server