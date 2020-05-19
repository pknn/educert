const sql = require('../../db')

const createRecord = async (record) => {
  try {
    const [id] = await sql`
    INSERT INTO RECORDS ${sql(record)} RETURNING id
  `
    return id
  } catch (error) {}
}

const updateRecord = async (record) => {
  try {
    const [
      id
    ] = await sql`UPDATE RECORDS SET gpax = ${record.gpax}, updated_at = CURRENT_TIMESTAMP WHERE id = ${record.id} RETURNING id
        `
    return id
  } catch (error) {}
}

const deleteRecord = async (id) => {
  try {
    const [
      returningId
    ] = await sql`DELETE FROM RECORDS WHERE id = ${id} RETURNING id`
    return returningId
  } catch (error) {}
}

const getRecordFromID = async (id) => {
  const result = await sql`SELECT holder, gpax, created_at, updated_at FROM RECORDS WHERE id = ${id}`
  return result[0]
}

module.exports = {
  createRecord,
  updateRecord,
  deleteRecord,
  getRecordFromID
}
