const sql = require('../../db')

module.exports = {
  create: async (holderID, gpax) => {
    const recordToAdd = {
      holder: holderID,
      gpax
    }
    const [record] = await sql`
      insert into records ${sql(recordToAdd)}
      returning holder
    `
    return record
  },
  getAll: () => {
    return sql`
      select * from records
      join users on
      users.public_address=records.holder
    `
  },
  getById: async (id) => {
    const [record] = await sql`
      select * from records
      where holder=${id}
      join users on
      users.public_address=records.holder
    `
    return record
  },
  edit: (id, gpax) => {
    return sql`
      update records
      set
      gpax=${gpax},
      updated_at=CURRENT_TIMESTAMP,
      where holder=${id}
    `
  },
  delete: (id) => {
    return sql`
      delete from records
      where holder=${id}
    `
  }
}
