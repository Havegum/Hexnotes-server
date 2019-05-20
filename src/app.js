// https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const network = require('../assets/network.json')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "This is another test sending description!"
    }]
  )
})

app.get('/network', (req, res) => {
  res.send(network)
})

app.listen(8081)
