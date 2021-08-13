import express from 'express'
const app = express()
const db = require('./db.js')
const http = require('http')
const server = http.createServer(app)
const accountRouters = require('./routes/accountManager')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(require('body-parser').urlencoded({ extended: true }))

app.use('/', accountRouters)

module.exports = { server, app }
