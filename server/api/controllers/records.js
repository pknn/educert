const service = require('../services/records')

module.exports = {
  getRecords: async (request, response) => {
    const { id } = request.query
    let records
    if (id) {
      records = await service.getRecordById(id)
    } else {
      records = await service.getAllRecords()
    }
    response.json(records)
  },
  getSelfRecord: async (request, response) => {
    const recordID = request.publicAddress
    const record = await service.getRecordById(recordID)
    response.json(record)
  },
  getTransactions: async (request, response) => {
    const { recordID } = request.query
    let transactions
    if (recordID) {
      transactions = await service.getTransactionsOf(recordID)
    } else {
      transactions = await service.getAllTransactions()
    }
    response.json(transactions)
  },
  getSelfTransactions: async (request, response) => {
    const recordID = request.publicAddress
    const transactions = await service.getTransactionOf(recordID)
    response.json(transactions)
  },
  create: async (request, response) => {
    const issuerID = request.publicAddress
    const { holderID, gpax } = request.body
    await service.create(holderID, gpax, issuerID)
    response.sendStatus(201)
  },
  edit: async (request, response) => {
    const issuerID = request.publicAddress
    const { recordID } = request.params
    const { gpax } = request.body
    await service.edit(recordID, gpax, issuerID)
    response.sendStatus(200)
  },
  delete: async (request, response) => {
    const issuerID = request.publicAddress
    const { recordID } = request.params
    await service.delete(recordID, issuerID)
  }
}
