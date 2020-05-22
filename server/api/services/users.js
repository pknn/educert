const repository = require('../repositories/users')

const createVerificationCode = () => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

module.exports = {
  getUserByAddress: (publicAddress) => {
    return repository.getUserByAddress(publicAddress.toLowerCase())
  },
  getUsersByRole: (role) => {
    return repository.getUsersByRole(role)
  },
  invite: (publicAddress, entityId) => {
    const verification = createVerificationCode()
    return repository.addPending(
      verification,
      publicAddress.toLowerCase(),
      entityId
    )
  },
  register: async (publicAddress, firstName, lastName, role, verification) => {
    if (role === 'employer') {
      const user = await repository.createUser(
        firstName,
        lastName,
        publicAddress.toLowerCase(),
        role
      )
      return user
    } else {
      const pending = await repository.getPendingFromAddress(
        publicAddress.toLowerCase()
      )
      if (!pending) throw new Error('Not found in Pending')
      const { verification_code: code, entity_id: entityId } = pending
      if (code === verification) {
        await repository.createUser(
          firstName,
          lastName,
          publicAddress.toLowerCase(),
          role,
          entityId
        )
        await repository.removePending(publicAddress.toLowerCase())
      } else {
        throw new Error('Incorrect Verification Code')
      }
    }
  },
  delete: (publicAddress) => {
    return repository.deleteUser(publicAddress)
  }
}
