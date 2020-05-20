const sql = require('../../db')

module.exports = {
  getUserByAddress: async (publicAddress) => {
    const [user] = await sql`
      select * from users 
      where public_address=${publicAddress}
    `
    return user
  },
  getPendingFromAddress: async (publicAddress) => {
    const [code] = await sql`
      select id, verification_code from pending_users
      where public_address=${publicAddress}
    `
    return code
  },
  addPending: (verificationCode, publicAddress) => {
    const body = {
      verification_code: verificationCode,
      public_address: publicAddress
    }
    return sql`
      insert into pending_users ${sql(body)}
    `
  },
  removePending: (id) => {
    return sql`
      delete from pending_users
      where id=${id}
    `
  },
  createUser: async (firstName, lastName, publicAddress, role) => {
    const body = {
      firstName,
      lastName,
      public_address: publicAddress,
      role
    }
    return await sql`
      insert into users ${sql(body)}
    `
  }
}
