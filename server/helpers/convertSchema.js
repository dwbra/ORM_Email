//Data Structure
/*
[
    [colName: string, dataType: string, columnConstraints: string]
]
 */

//Example Data
// const testData = [
//   ["id", "serial", "primary key"],
//   ["title", "VARCHAR(100)", "not null"],
//   ["email", "VARCHAR(100)", "UNIQUE NOT NULL"],
// ];

/**
 * Javascript Array to SQL String
 * @param {Array} arr An array of string arrays containing the schema values
 * @returns {String}
 */
const convertSchema = (arr) => {
  const newArr = arr.map(([colName, datatype, constraints]) => {
    return `"${colName}" ${datatype.toUpperCase()} ${constraints.toUpperCase()}`;
  });
  return newArr.join(", ");
};

export default convertSchema;
