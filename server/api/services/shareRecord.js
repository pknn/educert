const repository = require('../repositories/shareRecord')

const createShareRecord = async (recordId, userId) => {
  return repository.createUser({
    recordId,
    userId
  })
}

const deleteSharedRecord = async (id) => {
    return repository.deleteRecord(id)
}
module.exports = {
  createShareRecord,
  deleteSharedRecord,
}
