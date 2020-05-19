const sql = require('../../db')

const createTransaction = async (shareRecord) => {
  try {
    await sql`
    INSERT INTO TRANSACTIONS ${sql(shareRecord)}
  `
  } catch (error) {}
}

const getTransactionFromID = (id) => {
  return sql`SELECT record, issuer, created_at, issued_data FROM TRANSACTIONS WHERE id =${id}`
}

module.exports = {
  createTransaction,
  getTransactionFromID
}
