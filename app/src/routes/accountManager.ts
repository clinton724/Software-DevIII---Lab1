const express = require('express')
import Type from '../../node_modules/@types/mssql/index'
const userRepo = require('../db/users/index')
const router = express.Router()

router.get('/api/signup', async function (req: any, res: any) {
  const email = 'clinton@gmail.com'
  const user = await userRepo.getUserByEmail(email).then((result: any) => { return result.recordset })
  console.log(user)
  let list = ['tony']

  res.json(['tony', 'me', 'her']);
})

router.post('/api/signup', async function (req: any, res: any) {
  console.log(req.body)
  console.log(req.body.firstName)
})

module.exports = router
