const jwt = require('jsonwebtoken')
const repository = require('../repositories/user')

const getRoleAccessMiddleware = (role) => async (request, response, next) => {
  const { Authorization: token } = request.headers
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET)
    const user = await repository.getUserFromID(payload.id)
    if (user.role === role) next()
    else response.sendStatus(403)
  } catch (error) {
    response.sendStatus(403)
  }
}

const createUserMiddleware = async (request, response, next) => {
  const { role } = request.body
  if (role === 'employer') next()
  else {
    const middleware = await getRoleAccessMiddleware('officer')
    middleware(request, response, next)
  }
}

const officerAccessMiddleware = getRoleAccessMiddleware('officer')

const restrictedAccessMiddleware = async (request, response, next) => {
  const { id } = request.params
  const { Authorization: token } = request.headers
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET)
    const requester = await repository.getUserFromID(payload.id)
    if (requester.id === id || requester.role === 'officer') next()
    else response.sendStatus(403)
  } catch (error) {
    response.sendStatus(403)
  }
}

module.exports = {
  createUserMiddleware,
  officerAccessMiddleware,
  restrictedAccessMiddleware
}
