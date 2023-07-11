import pgPool from "../db/config.js";
import prepareInsert from "../helpers/prepareInsert.js";

/**
 * Validate and then insert the request body into the specified database table
 * @param {String} tableName The name of the table you'd like to insert data into.
 * @param {String[]} columns The name of the columns you'd like to place the data.
 * @param {String[]} values The actual data you want to insert into the table.
 * @param {String} returning What you would like to retrieve after the insert query is processed.
 * @returns {Object}
 */
const insertData = async (tableName, columns, values, returning) => {
  const [title, body, email] = values;
  try {
    const client = await pgPool.connect();
    const insertQuery = prepareInsert(tableName, columns, returning);
    const q = {
      text: insertQuery,
      values: [title, body, email],
    };
    const dbResponse = await client.query(q);
    client.release();
    return { success: true, message: "insert worked", data: dbResponse };
  } catch (error) {
    console.log(error);
    return { success: false, message: "insert failed" };
  }
};

export default insertData;
