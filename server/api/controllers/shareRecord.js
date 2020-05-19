const service = require('../services/shareRecord')

const post = async (request, response) => {
  const { recordId, viewerId } = request.body
  await service.createShareRecord(recordId, viewerId)
  response.sendStatus(201)
}

const deleteSharedRecord = async (request, response) => {
  const { id } = request.params
  await service.deleteSharedRecord(id)
  response.sendStatus(200)
}

const get = async (request, response) => {
  const { id } = request.params
  const shareRecord = await service.getShareRecordFromID(id)
  response.json(shareRecord)
}

module.exports = {
  post,
  get,
  delete: deleteSharedRecord
}
