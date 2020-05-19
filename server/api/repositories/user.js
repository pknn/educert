const sql = require('../../db')

const createUser = async (user) => {
  try {
    await sql`
    INSERT INTO USERS ${sql(user)}
  `
  } catch (error) {
    throw new Error('Already have user with this email')
  }
}

const getUserFromID = async (id) => {
  const result = await sql`SELECT id, firstname, lastname, email, role FROM USERS WHERE id=${id}`
  return result[0]
}

const getUserFromRole = (role) => {
  return sql`SELECT id, firstname, lastname, email, role FROM USERS WHERE role=${role}`
}

const getUserFromEmail = async (email) => {
  const result = await sql`SELECT id, firstname, lastname, email, hashedpassword, role FROM USERS WHERE email=${email}`
  return result[0]
}

const deleteUser = (id) => {
  return sql`DELETE FROM USERS WHERE id=${id}`
}

module.exports = {
  createUser,
  getUserFromID,
  getUserFromRole,
  getUserFromEmail,
  deleteUser
}
