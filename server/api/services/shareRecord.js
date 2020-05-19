const repository = require('../repositories/shareRecord')

const createShareRecord = (recordId, userId) => {
  return repository.createShareRecord({
    record: recordId,
    viewer: userId
  })
}

const deleteSharedRecord = (id) => {
  return repository.deleteSharedRecord(id)
}

const getShareRecordFromID = (id) => {
  return repository.getShareRecordFromID(id)
}

module.exports = {
  createShareRecord,
  deleteSharedRecord,
  getShareRecordFromID
}
