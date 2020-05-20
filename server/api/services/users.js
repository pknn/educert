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
    return repository.getUserByAddress(publicAddress)
  },
  invite: (publicAddress) => {
    const verification = createVerificationCode()
    return repository.addPending(verification, publicAddress)
  },
  register: async (publicAddress, firstName, lastName, role, verification) => {
    if (role === 'employer') {
      const user = await repository.createUser(
        firstName,
        lastName,
        publicAddress,
        role
      )
      return user
    } else {
      const pending = await repository.getPendingFromAddress(publicAddress)
      if (!pending) throw new Error('Not found in Pending')
      const { verification_code: code, id } = pending
      if (code === verification) {
        await repository.createUser(firstName, lastName, publicAddress, role)
        await repository.removePending(id)
      } else {
        throw new Error('Incorrect Verification Code')
      }
    }
  }
}
