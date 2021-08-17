const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

function accountManagerRouters ({ userManager }) {
  router.post('/api/addUser',
    body('firstName').notEmpty(),
    body('surname').notEmpty(),
    body('email').isEmail(),
    body('school').notEmpty(),
    body('yearOfStudy').notEmpty(),
    body('password2').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password')
      }

      return true
    }),
    userManager.addUser.bind(userManager)
  )
  return router
}

module.exports = { accountManagerRouters }
