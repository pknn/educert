const repository = require('../repositories/shares')

module.exports = {
  create: (holderId, employerId) => {
    return repository.create(holderId.toLowerCase(), employerId.toLowerCase())
  },
  getByHolderId: (holderId) => {
    return repository.getByHolderId(holderId.toLowerCase())
  },
  getByEmployerId: (employerId) => {
    return repository.getByEmployerId(employerId.toLowerCase())
  },
  getByPairs: (holderId, employerId) => {
    return repository.getByPairs(
      holderId.toLowerCase(),
      employerId.toLowerCase()
    )
  },
  delete: (id) => {
    return repository.delete(id)
  }
}
