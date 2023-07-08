import pgPool from "../db/config.js";
import convertSchema from "../helpers/convertSchema.js";
import xss from "xss";

/**
 * Function to create a database table
 * @param {String} tableName Name of the table you'd like to create
 * @param {String[]} tableSchemaArray An array of string arrays containing the schema you'd like to assign to the table
 */
export const createTable = async (tableName, tableSchemaArray) => {
  try {
    const client = await pgPool.connect();
    const schema = xss(convertSchema(tableSchemaArray));
    const text = `CREATE TABLE IF NOT EXISTS ${xss(tableName)} (
        ${schema}
    );`;
    await client.query(text);
    client.release();
    return { success: true, message: "table created" };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "table not created",
      errorMessage: error,
    };
  }
};
