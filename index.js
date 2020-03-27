const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Docker&GitHub!')
})

app.listen(3000, function () {
  console.log('Script in esecuzione sulla 3000...')
})

