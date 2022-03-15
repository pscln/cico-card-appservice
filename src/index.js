const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('{"service_status": "running"}]')
})

app.listen(port, () => {
  console.log(`CICO example for Azure App Service listening on port ${port}`)
})