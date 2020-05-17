const bcrypt = require('bcrypt')
const repository = require('../repositories/user')

const saltRounds = 10
const createUser = async (firstName, lastName, email, password, role) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return repository.createUser({
    firstName,
    lastName,
    email,
    hashedPassword,
    role
  })
}

module.exports = {
  createUser
}
