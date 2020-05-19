const service = require('../services/auth')

module.exports = {
  login: async (request, response) => {
    const { email, password } = request.body
    try {
      const userToken = await service.login(email, password)
      response.json(userToken)
    } catch (error) {
      response.sendStatus(401)
    }
  },
  logout: (request, response) => {
    response.send()
  }
}
