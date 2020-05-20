const jwt = require('jsonwebtoken')
const repository = require('../repositories/users')

module.exports = {
  login: async (publicAddress) => {
    const user = await repository.getUserByAddress(publicAddress)
    if (!user) {
      throw new Error('User not found')
    } else {
      const token = jwt.sign({ publicAddress }, process.env.APP_SECRET)
      return token
    }
  }
}
