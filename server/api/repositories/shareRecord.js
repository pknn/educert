const sql = require('../../db')

const createShareRecord = async (shareRecord) => {
  try {
    await sql`
    INSERT INTO GRANTED_SHARE_RECORDS ${sql(shareRecord)}
  `
  } catch (error) {}
}

const deleteSharedRecord = async (id) => {
    try{
        await sql`DELETE FROM GRANTED_SHARE_RECORDS WHERE id = ${id}`
    }catch(error){}
}

const getSharedRecord = (id) => {
  return sql`SELECT holder, gpax, created_at, updated_at FROM GRANTED_SHARE_RECORDS`
}


module.exports = {
  createShareRecord,
  deleteSharedRecord,
  getSharedRecord,
}
