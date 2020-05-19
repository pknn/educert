const service = require('../services/record')

const post = async (request, response) => {
  const { holder, gpax } = request.body
  await service.createUser(holder, gpax)
  response.sendStatus(201)
}

const put = async (request, response) => {
  const { id, holder, gpax } = request.body
  await service.updateRecord(id, holder, gpax)
  response.sendStatus(200)
}

const deleteRecord = async (request, response) => {
  const { id } = request.params
  await service.deleteRecord(id)
  response.sendStatus(200)
}

const get = async (request, response) => {
  const { id } = request.params
  const record = await service.getRecordFromID(id)
  response.json(record)
}

module.exports = {
  post,
  get,
  put,
  delete: deleteRecord
}
