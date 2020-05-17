const sql = require('../../db')

const createUser = async (user) => {
  try {
    await sql`
    INSERT INTO USERS ${sql(user)}
  `
  } catch (error) {}
}

const getUser = (id) => {
  return sql`SELECT firstname, lastname, email, role from USERS`
}

module.exports = {
  createUser,
  getUser
}
