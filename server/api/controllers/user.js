const service = require('../services/user')
const post = async (request, response) => {
  const { firstName, lastName, email, password, role } = request.body
  await service.createUser(firstName, lastName, email, password, role)
  response.sendStatus(201)
}

const getStudents = async (request, response) => {
  const users = await service.getUserFromRole('student')
  response.json(users)
}

const getOfficers = async (request, response) => {
  const users = await service.getUserFromRole('officer')
  response.json(users)
}

const getFromID = async (request, response) => {
  const { id } = request.params
  const user = await service.getUserFromID(id)
  response.json(user)
}

const deleteUser = async (request, response) => {
  const { id } = request.params
  await service.deleteUser(id)
  response.sendStatus(200)
}

module.exports = {
  post,
  delete: deleteUser,
  getStudents,
  getOfficers,
  getFromID
}
