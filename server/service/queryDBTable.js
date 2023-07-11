import pgPool from "../db/config.js";

/**
 *
 * @param {String[]} columns Array of strings containing the name of the columns you'd like to retrieve data from
 * @param {String} tableName Name of the table you'd like to retrieve data from.
 * @returns {Object}
 */
const queryData = async (columns, tableName) => {
  try {
    const client = await pgPool.connect();
    const q = `SELECT ${columns} FROM ${tableName};`;
    const dbResponse = await client.query(q);
    client.release();
    return { success: true, message: "query successful", data: dbResponse };
  } catch (error) {
    console.log(error);
    return { success: false, message: "query failed" };
  }
};

export default queryData;
