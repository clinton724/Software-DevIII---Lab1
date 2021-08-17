const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10

class userManager {
  constructor ({ userRepository }) {
    this.userRepository = userRepository
    this.addUser = this.addUser.bind(this)
  }

  async addUser (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const user = { ...req.body }
    console.log('here: ', user)
    const temp = await this.userRepository.getUserByEmail(user.email)
    if (temp.length === 1) {
      return res.status(400).json({ errors: 'the email already exists' })
    }
    const repo = this.userRepository
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        console.log(err)
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        // Store hash in your password DB.
        user.password = hash
        if (err) {
          console.log(err)
        }
        repo.addUser(user)
      })
    })
  }
}

module.exports = userManager
