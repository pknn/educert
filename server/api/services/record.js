const repository = require('../repositories/record')

const createRecord = async (holder, gpax) => {
  return repository.createRecord({
    holder,
    gpax
  })
}

const updateRecord = async (id, holder, gpax) =>{
    return repository.updateRecord({
        id,
        holder,
        gpax
    })
}

const deleteRecord = async (id) => {
    return repository.deleteRecord(id)
}

const getRecordFromID = async (id) => {
    return repository.getRecordFromID(id)
}
module.exports = {
  createRecord,
  updateRecord,
  deleteRecord,
  getRecordFromID
}
