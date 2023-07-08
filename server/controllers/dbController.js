import { createTable } from "../service/createDBTable.js";
import { dropTable } from "../service/dropDBTable.js";

export const postCreateTable = async (req, res) => {
  const { tableName, tableSchema } = req.body;
  const result = await createTable(tableName, tableSchema);
  return res.json(result);
};

export const postDropTable = async (req, res) => {
  const { tableName, password } = req.body;
  const result = await dropTable(tableName, password);
  res.json(result);
};
