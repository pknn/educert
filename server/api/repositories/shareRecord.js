const sql = require('../../db')

const createShareRecord = async (shareRecord) => {
  try {
    await sql`
    INSERT INTO GRANTED_SHARE_RECORDS ${sql(shareRecord)}
  `
  } catch (error) {}
}

const deleteSharedRecord = async (id) => {
  try {
    await sql`DELETE FROM GRANTED_SHARE_RECORDS WHERE id = ${id}`
  } catch (error) {}
}

const getShareRecordFromID = async (id) => {
  const result = await  sql`SELECT record, viewer, created_at FROM GRANTED_SHARE_RECORDS WHERE id =${id}`
  return result[0]
}

module.exports = {
  createShareRecord,
  deleteSharedRecord,
  getShareRecordFromID
}
