const express = require('express')
const wikiRouter = express.Router()

wikiRouter.get('/', (req, res) => {
  res.send('hello wiki')
}) 

module.exports = wikiRouter