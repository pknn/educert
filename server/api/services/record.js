const repository = require('../repositories/record')

const createRecord = (holder, gpax) => {
  return repository.createRecord({
    holder,
    gpax
  })
}

const updateRecord = (id, holder, gpax) => {
  return repository.updateRecord({
    id,
    holder,
    gpax
  })
}

const deleteRecord = (id) => {
  return repository.deleteRecord(id)
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
