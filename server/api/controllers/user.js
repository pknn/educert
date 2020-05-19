const service = require('../services/user')
const post = async (request, response) => {
  const { firstName, lastName, email, password, role } = request.body
  try {
    await service.createUser(firstName, lastName, email, password, role)
    response.sendStatus(201)
  } catch (error) {
    response.sendStatus(400)
  }
}

const getFromID = async (request, response) => {
  const { id } = request.params
  let result
  if (id === 'students') {
    result = await service.getUserFromRole('student')
  } else if (id === 'officers') {
    result = await service.getUserFromRole('officer')
  } else {
    result = await service.getUserFromID(id)
  }
  response.json(result)
}

const deleteUser = async (request, response) => {
  const { id } = request.params
  await service.deleteUser(id)
  response.sendStatus(200)
}

module.exports = {
  post,
  delete: deleteUser,
  getFromID
}
