const service = require('../services/transaction')

const post = async (request, response) => {
  const { recordId, userId } = request.body
  await service.createTransaction(recordId, userId)
  response.sendStatus(201)
}


const get = async (request, response) => {
    const { id } = request.params
    const transaction = await service.getTransactionFromID(id)
    response.json(transaction)
}

module.exports = {
  post,
  get,
}
