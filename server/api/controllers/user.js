const service = require('../services/user')
const post = async (request, response) => {
  const { firstName, lastName, email, password, role } = request.body
  await service.createUser(firstName, lastName, email, password, role)
  response.sendStatus(201)
}

module.exports = {
  post
}
