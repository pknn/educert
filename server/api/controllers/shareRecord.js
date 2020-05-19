const service = require('../services/shareRecord')

const post = async (request, response) => {
  const { recordId, userId } = request.body
  await service.createShareRecord(recordId, userId)
  response.sendStatus(201)
}

const deleteSharedRecord = async (request, response) => {
    const { id } = request.body
    await service.deleteSharedRecord(id)
    response.sendStatus(201)
}

module.exports = {
  post,
  put,
  delete: deleteSharedRecord
}
