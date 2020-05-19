const sql = require('../../db')

const createRecord = async (record) => {
  try {
    await sql`
    INSERT INTO RECORDS ${sql(record)}
  `
  } catch (error) {}
}


const updateRecord = async (record) => {
    try{
        await sql`UPDATE RECORDS SET holder = ${record.holder}, gpax = ${record.gpax}, updated_at = CURRENT_TIMESTAMP 
        WHERE id = ${record.id}
        `
    }catch(error){}
}

const deleteRecord = async (id) => {
    try{
        await sql`DELETE FROM RECORDS WHERE id = ${id}`
    }catch(error){}
}

const getRecordFromID = (id) => {
  return sql`SELECT holder, gpax, created_at, updated_at FROM RECORDS WHERE id = ${id}`
}


module.exports = {
  createRecord,
  updateRecord,
  deleteRecord,
  getRecordFromID,
}
