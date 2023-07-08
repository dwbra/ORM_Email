import pgClient from "../db/config.js";
import convertSchema from "../helpers/convertSchema.js";

/**
 * Function to create a database table
 * @param {String} tableName Name of the table you'd like to create
 * @param {String[]} tableSchemaArray An array of string arrays containing the schema you'd like to assign to the table
 */
export const createTable = async (tableName, tableSchemaArray) => {
  try {
    const schema = convertSchema(tableSchemaArray);
    const text = `CREATE TABLE IF NOT EXISTS ${tableName} (
        ${schema}
    );`;
    await pgClient.connect();
    await pgClient.query(text);
  } catch (error) {
    console.log(error);
  } finally {
    await pgClient.end();
  }
};
