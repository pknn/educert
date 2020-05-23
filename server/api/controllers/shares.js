const service = require('../services/shares')

module.exports = {
  create: async (request, response) => {
    const holderId = request.publicAddress
    const { employerId } = request.body
    await service.create(holderId, employerId)
    response.sendStatus(201)
  },
  get: async (request, response) => {
    const { holderId, employerId } = request.query
    let shares
    if (holderId) {
      shares = await service.getByHolderId(holderId)
    } else if (employerId) {
      shares = await service.getByEmployerId(employerId)
    }
    response.json(shares)
  },
  delete: async (request, response) => {
    const { id } = request.params
    await service.delete(id)
    response.sendStatus(200)
  }
}
