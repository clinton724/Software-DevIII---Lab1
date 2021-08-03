import express from 'express'
const app = express()

const http = require('http')
const db = require('./db.js')
const server = http.createServer(app)

module.exports = { server, app }
