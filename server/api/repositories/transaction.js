const sql = require('../../db')

const createTransaction = async (shareRecord) => {
  try {
    await sql`
    INSERT INTO TRANSACTIONS ${sql(shareRecord)}
  `
  } catch (error) {}
}

const getTransactionFromID = async (id) => {
  const result = await sql`SELECT record, issuer, created_at, issued_data FROM TRANSACTIONS WHERE id =${id}`
  return result[0]
}

module.exports = {
  createTransaction,
  getTransactionFromID
}
