const repository = require('../repositories/transaction')

const createTransaction = (recordId, userId) => {
  return repository.createTransaction({
    record: recordId,
    issuer: userId
  })
}

const getTransactionFromID = (id) => {
  return repository.getTransactionFromID(id)
}

module.exports = {
  createTransaction,
  getTransactionFromID
}
