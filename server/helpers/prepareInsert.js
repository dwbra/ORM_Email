import xss from "xss";

//Data Structure
/*
    tableName = string
    columns = array
    values = array
    returning = string
*/

// const mockName = "email";
// const mockCols = ["url", "name", "description"];
// const mockVals = ["www.fake.com", "Fake", "This is a fake description"];
// const mockReturning = "id";

/**
 * Build the SQL Insert string needed to insert data into the database.
 * @param {String} tableName
 * @param {Array} columns
 * @param {String} returning
 * @returns {String}
 */
const prepareInsert = (tableName, columns, returning) => {
  const cols = `${columns.join(", ")}`;

  // prettier-ignore
  return `INSERT INTO ${xss(tableName)} (${xss(cols)}) VALUES($1, $2, $3) RETURNING ${xss(returning)};`;
};

export default prepareInsert;
