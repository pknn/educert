const repository = require('../repositories/record')
const transaction = require('./transaction')

const createRecord = async (holder, gpax, issuerId) => {
  const returnId = await repository.createRecord({
    holder,
    gpax
  })
  await transaction.createTransaction(returnId, issuerId)
}

const updateRecord = async (id, holder, gpax, issuerId) => {
  const returnId = await repository.updateRecord({
    id,
    holder,
    gpax
  })
  await transaction.createTransaction(returnId, issuerId)
}

const deleteRecord = async (id, issuerId) => {
  const returnId = await repository.deleteRecord(id)
  await transaction.createTransaction(returnId, issuerId)
}

const getRecordFromID = (id) => {
  return repository.getRecordFromID(id)
}
module.exports = {
  createRecord,
  updateRecord,
  deleteRecord,
  getRecordFromID
}
