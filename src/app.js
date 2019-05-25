// https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

let network = require('../assets/network.json') // TODO: Fetch this from database

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/network', (req, res) => {
  res.send(network)
})

app.get('/network/links', (req, res) => { res.send(network.links) })
app.get('/network/nodes', (req, res) => { res.send(network.nodes) })

app.post('/network/person', (req, res) => {
  let person = req.body

  let i = network.nodes.findIndex(d => d.id === person.id)
  network.nodes[i] = person
  res.send(network)
})

app.listen(8081)
