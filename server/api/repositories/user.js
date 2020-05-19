const sql = require('../../db')

const createUser = async (user) => {
  try {
    await sql`
    INSERT INTO USERS ${sql(user)}
  `
  } catch (error) {}
}

const getUserFromID = (id) => {
  return sql`SELECT firstname, lastname, email, role FROM USERS WHERE id=${id}`
}

const getUserFromRole = (role) => {
  return sql`SELECT id, firstname, lastname, email, role FROM USERS WHERE role=${role}`
}

const deleteUser = (id) => {
  return sql`DELETE FROM USERS WHERE id=${id}`
}

module.exports = {
  createUser,
  getUserFromID,
  getUserFromRole,
  deleteUser
}
