const repository = require('../repositories/record')

const createRecord = async (holder, gpax) => {
  return repository.createUser({
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
module.exports = {
  createRecord,
  updateRecord,
  deleteRecord
}
