const sql = require('../../db')

module.exports = {
  getUserByAddress: async (publicAddress) => {
    const [user] = await sql`
  select * from users where public_address=${publicAddress}
  `
    return user
  }
}
