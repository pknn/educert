const sql = require('../../db')

module.exports = {
  create: (holderId, employerId) => {
    const body = {
      holder: holderId,
      employer: employerId
    }
    return sql`
      insert into shared_records ${sql(body)}
    `
  },
  getByHolderId: (holderId) => {
    return sql`
      select * from shared_records
      where holder=${holderId}
    `
  },
  getByEmployerId: (employerId) => {
    return sql`
      select * from shared_records
      where employer=${employerId}
    `
  },
  getByPairs: async (holderId, employerId) => {
    const [share] = await sql`
      select * from shared_records
      where holder=${holderId}
      and employer=${employerId}
    `
    return share
  },
  delete: (id) => {
    return sql`
      delete from shared_records
      where id=${id}
    `
  }
}
