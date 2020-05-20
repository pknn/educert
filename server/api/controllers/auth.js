const service = require('../services/auth')

module.exports = {
  login: async (request, response) => {
    const { publicAddress } = request.body
    try {
      const token = await service.login(publicAddress)
      response.json({ token })
    } catch (error) {
      response.sendStatus(401)
    }
  },
  logout: (_, response) => {
    response.sendStatus(200)
  }
}
