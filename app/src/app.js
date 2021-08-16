const express = require('express')
const app = express()
const db = require('./db.js')
const http = require('http')
const server = http.createServer(app)
const bodyParser = require('body-parser')
const cors = require('cors')

const { container } = require('./di-setup')
const accountRouter = container.resolve('accountManagerRouters')

app.use(cors())
app.use(bodyParser.json())
app.use(require('body-parser').urlencoded({ extended: true }))

app.use('/', accountRouter)

module.exports = { server, app }
