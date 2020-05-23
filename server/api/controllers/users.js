const service = require('../services/users')

module.exports = {
  getSelf: async (request, response) => {
    const publicAddress = request.publicAddress
    const result = await service.getUserByAddress(publicAddress)
    response.json(result)
  },
  getAddressExists: async (request, response) => {
    const { publicAddress } = request.params
    const result = await service.getUserByAddress(publicAddress)
    if (result) {
      response.send(true)
    } else {
      response.send(false)
    }
  },
  getUsers: async (request, response) => {
    const { role, entityID } = request.query
    let users
    if (entityID) {
      users = await service.getUsersByEntity(entityID)
    } else {
      users = await service.getUsersByRole(role)
    }
    response.json(users)
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
    const { publicAddress, entityId } = request.body
    try {
      await service.invite(publicAddress, entityId)
      response.sendStatus(201)
    } catch (error) {
      response.sendStatus(500)
    }
  },
  deleteUser: async (request, response) => {
    const { publicAddress } = request.params
    try {
      await service.delete(publicAddress)
      response.sendStatus(200)
    } catch (error) {
      response.sendStatus(500)
    }
  }
}
