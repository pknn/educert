const service = require('../services/record')

const post = async (request, response) => {
  const { holder, gpax } = request.body
  await service.createUser(holder, gpax)
  response.sendStatus(201)
}

const put = async (request, response) => {
    const { id, holder, gpax } = request.body
    await service.updateRecord(id, holder, gpax)
    response.sendStatus(201)
}

const deleteRecord = async (request, response) => {
    const { id } = request.body
    await service.deleteRecord(id)
    response.sendStatus(201)
}

module.exports = {
  post,
  put,
  delete: deleteRecord
}
