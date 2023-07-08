import { createTable } from "../service/createDBTable.js";

export const postCreateTable = async (req, res) => {
  try {
    const { tableName, tableSchema } = req.body;
    await createTable(tableName, tableSchema);
    return res.json({ success: true, message: "table created" });
  } catch (error) {
    console.log(error);
  }
};
