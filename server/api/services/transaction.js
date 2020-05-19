const repository = require('../repositories/transaction')

const createTransaction = (recordId, issuerId) => {
  return repository.createTransaction({
    record: recordId,
    issuer: issuerId
  })
}

const getTransactionFromID = (id) => {
  return repository.getTransactionFromID(id)
}

module.exports = {
  createTransaction,
  getTransactionFromID
}
