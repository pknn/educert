const rcRepo = require('../repositories/records')
const txRepo = require('../repositories/transaction')

module.exports = {
  create: async (holderID, gpax, issuerID) => {
    const recordID = await rcRepo.create(holderID, gpax)
    await txRepo.create(recordID, issuerID, 'create')
  },
  edit: async (recordID, gpax, issuerID) => {
    await rcRepo.edit(recordID, gpax)
    await txRepo.create(recordID, issuerID, 'edit')
  },
  delete: async (recordID, issuerID) => {
    await rcRepo.delete(recordID)
    await txRepo.create(recordID, issuerID, 'delete')
  },
  getRecordById: (recordID) => {
    return rcRepo.getById(recordID)
  },
  getAllRecords: () => {
    return rcRepo.getAll()
  },
  getTransactionOf: async (holderID) => {
    const transactions = await txRepo.getAll()
    return transactions.filter(
      (transaction) => transaction.recordID === holderID
    )
  },
  getAllTransactions: () => {
    return txRepo.getAll()
  }
}
