const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/users')

module.exports = {
  selfAccess: async (request, response, next) => {
    let { authorization: token } = request.headers
    if (!token) response.sendStatus(400)
    token = token.split(' ')
    if (token.shift() !== 'Bearer') response.sendStatus(401)
    const payload = jwt.verify(token.shift(), process.env.APP_SECRET)
    if (!payload.publicAddress) response.sendStatus(401)
    const user = await userRepository.getUserByAddress(payload.publicAddress)
    if (!user) response.sendStatus(401)
    else {
      request.publicAddress = payload.publicAddress
      next()
    }
  },
  officerAccess: async (request, response, next) => {
    let { authorization: token } = request.headers
    if (!token) response.sendStatus(400)
    token = token.split(' ')
    if (token.shift() !== 'Bearer') response.sendStatus(401)
    const payload = jwt.verify(token.shift(), process.env.APP_SECRET)
    if (!payload.publicAddress) response.sendStatus(401)
    const user = await userRepository.getUserByAddress(payload.publicAddress)
    if (!user || !user.role === 'officer') response.sendStatus(401)
    else next()
  }
}
