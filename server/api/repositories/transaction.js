const Transaction = require('../../ethereum')

module.exports = {
  create: (recordID, issuerID, txType) => {
    return Transaction.create(recordID, issuerID, txType)
  },
  getAll: () => {
    return Transaction.getAll()
  }
}
