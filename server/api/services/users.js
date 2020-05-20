const repository = require('../repositories/users')

module.exports = {
  getUserByAddress: (publicAddress) => {
    return repository.getUserByAddress(publicAddress)
  }
}
