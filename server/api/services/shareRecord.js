const repository = require('../repositories/shareRecord')

const createShareRecord = async (recordId, userId) => {
  return repository.createShareRecord({
    record: recordId,
    viewer: userId
  })
}

const deleteSharedRecord = async (id) => {
    return repository.deleteSharedRecord(id)
}

const getShareRecordFromID = async (id) => {
  return repository.getShareRecordFromID(id)
}

module.exports = {
  createShareRecord,
  deleteSharedRecord,
  getShareRecordFromID
}
