const service = require('../services/users')

module.exports = {
  getByAddress: async (request, response) => {
    const { publicAddress } = request.params
    const result = await service.getUserByAddress(publicAddress)
    response.json(result)
  }
}
