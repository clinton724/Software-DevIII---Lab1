const { validationResult } = require('express-validator')

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
  }
}

module.exports = userManager
