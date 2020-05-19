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

const getUserFromRole = (role) => {
  return repository.getUserFromRole(role)
}

const getUserFromID = (id) => {
  return repository.getUserFromID(id)
}

const deleteUser = (id) => {
  return repository.deleteUser(id)
}

module.exports = {
  createUser,
  deleteUser,
  getUserFromRole,
  getUserFromID
}
