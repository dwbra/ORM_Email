import { createTable } from "../service/createDBTable.js";
import { dropTable } from "../service/dropDBTable.js";
import insertData from "../service/insertIntoDBTable.js";
import queryData from "../service/queryDBTable.js";

/*
    JSON Payload Example

    {
    "tableName": "emails_manual",
    "tableSchema": [
        [
            "id",
            "serial",
            "primary key"
        ],
        [
            "title",
            "varchar(500)",
            "not null"
        ],
        [
            "body",
            "varchar(1500)",
            "not null"
        ],
        [
            "from_address",
            "varchar(250)",
            "not null"
        ],
        [
            "created_at",
            "TIMESTAMP",
            "DEFAULT now() not null"
        ]
    ]
}
*/

export const postCreateTable = async (req, res) => {
  const { tableName, tableSchema } = req.body;
  const result = await createTable(tableName, tableSchema);
  return res.json(result);
};

/* 
    JSON Payload Example
    {
        "tableName": "emails_manual",
        "password": "fake123"
    }
*/

export const postDropTable = async (req, res) => {
  const { tableName, password } = req.body;
  const result = await dropTable(tableName, password);
  res.json(result);
};

/*
    JSON Payload Example
    {
        "tableName": "emails_manual",
        "columns": ["title", "body", "from_address"],
        "values": [
            "Test1", 
            "Body copy for test 1",
            "dan.2230@hotmai.com"
        ],
        "returning": "id"
    }
*/

export const postInsertIntoTable = async (req, res) => {
  const { tableName, columns, values, returning } = req.body;
  const result = await insertData(tableName, columns, values, returning);
  res.json(result);
};

/*
    JSON Payload Example
    {
        "columns": [
            "title",
            "id"
        ],
        "tableName": "emails_manual"
    }
*/

export const getQueryTable = async (req, res) => {
  const { columns, tableName } = req.body;
  const result = await queryData(columns, tableName);
  res.json(result);
};
