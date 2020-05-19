const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const repository = require('../repositories/user')

const login = async (email, password) => {
  try {
    const user = await repository.getUserFromEmail(email)
    if (!user) throw new Error('User not found')
    const result = await bcrypt.compare(password, user.hashedpassword)
    if (result) {
      const token = jwt.sign({ id: user.id }, process.env.APP_SECRET)
      return {
        user,
        token
      }
    } else {
      throw new Error('Password is invalid')
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  login
}
