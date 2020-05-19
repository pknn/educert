const jwt = require('jsonwebtoken')
const repository = require('../repositories/user')

const createUserMiddleware = async (request, response, next) => {
  const { role } = request.body
  if (role === 'employer') next()
  else {
    await officerAccessMiddleware(request, response, next)
  }
}

const officerAccessMiddleware = async (request, response, next) => {
  let { authorization: token } = request.headers
  token = token.split(' ')
  if (token.shift() !== 'Bearer') response.sendStatus(401)
  token = token.shift()
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET)
    const user = await repository.getUserFromID(payload.id)
    if (user.role === 'officer') next()
    else response.sendStatus(403)
  } catch (error) {
    response.sendStatus(403)
  }
}

const restrictedAccessMiddleware = async (request, response, next) => {
  const { id } = request.params
  let { authorization: token } = request.headers
  token = token.split(' ')
  if (token.shift() !== 'Bearer') response.sendStatus(401)
  token = token.shift()
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
