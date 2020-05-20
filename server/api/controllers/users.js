const service = require('../services/users')

module.exports = {
  getByAddress: async (request, response) => {
    const { publicAddress } = request.params
    const result = await service.getUserByAddress(publicAddress)
    response.json(result)
  },
  register: async (request, response) => {
    const {
      publicAddress,
      firstName,
      lastName,
      role,
      verification
    } = request.body
    try {
      await service.register(
        publicAddress,
        firstName,
        lastName,
        role,
        verification
      )
      response.sendStatus(201)
    } catch (error) {
      response.status(400).send(error.message)
    }
  },
  invite: async (request, response) => {
    const { publicAddress } = request.body
    try {
      await service.invite(publicAddress)
      response.sendStatus(201)
    } catch (error) {
      response.sendStatus(500)
    }
  }
}
