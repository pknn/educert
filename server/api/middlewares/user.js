const jwt = require('jsonwebtoken')
const repository = require('../repositories/user')
const createUserMiddleware = async (request, response, next) => {
  const { role } = request.body
  if (role === 'employer') next()
  else {
    const { Authorization: token } = request.headers
    try {
      const payload = jwt.verify(token, process.env.APP_SECRET)
      const user = await repository.getUser(payload.id)
      if (user.role === 'officer') next()
      else response.sendStatus(403)
    } catch (error) {
      response.sendStatus(403)
    }
  }
}

module.exports = {
  createUserMiddleware
}
