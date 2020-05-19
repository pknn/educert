const repository = require('../repositories/transaction')

const createTransaction = async (recordId, userId) => {
  return repository.createTransaction({
    record: recordId,
    issuer: userId
  })
}

const getTransactionFromID = async (id) => {
  return repository.getTransactionFromID(id)
}

module.exports = {
  createTransaction,
  getTransactionFromID,
}
