import pgPool from "../db/config.js";
import "dotenv/config";

/**
 * Function to drop a database table
 * @param {String} tableName Name of the table you'd like to drop
 * @param {String} password The env password required to drop tables
 */
export const dropTable = async (tableName, password) => {
  try {
    const client = await pgPool.connect();
    if (process.env.DROP_DB_PASSWORD === password) {
      const text = `DROP TABLE IF EXISTS ${tableName};`;
      await client.query(text);
      client.release();
      return { success: true, message: "table dropped" };
    }
    client.release();
    return { success: false, message: "table not dropped" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "table not dropped" };
  }
};
