const jwt = require('jsonwebtoken')
const service = require('../services/record')
const repository = require('../repositories/user')

const post = async (request, response) => {
  const { holder, gpax } = request.body

  let { authorization: token } = request.headers
  token = token.split(' ')
  if (token.shift() !== 'Bearer') response.sendStatus(401)
  token = token.shift()
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET)
    const issuerId = await repository.getUserFromID(payload.id)

    await service.createRecord(holder, gpax, issuerId)
    response.sendStatus(201)
  } catch (error) {
    response.sendStatus(403)
  }
}

const put = async (request, response) => {
  const { id, holder, gpax } = request.body

  let { authorization: token } = request.headers
  token = token.split(' ')
  if (token.shift() !== 'Bearer') response.sendStatus(401)
  token = token.shift()
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET)
    const issuerId = await repository.getUserFromID(payload.id)

    await service.updateRecord(id, holder, gpax, issuerId)
    response.sendStatus(200)
  } catch (error) {
    response.sendStatus(403)
  }
}

const deleteRecord = async (request, response) => {
  const { id } = request.params

  let { authorization: token } = request.headers
  token = token.split(' ')
  if (token.shift() !== 'Bearer') response.sendStatus(401)
  token = token.shift()
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET)
    const issuerId = await repository.getUserFromID(payload.id)

    await service.deleteRecord(id, issuerId)
    response.sendStatus(200)
  } catch (error) {
    response.sendStatus(403)
  }
}

const get = async (request, response) => {
  const { id } = request.params
  const record = await service.getRecordFromID(id)
  response.json(record)
}

module.exports = {
  post,
  get,
  put,
  delete: deleteRecord
}
