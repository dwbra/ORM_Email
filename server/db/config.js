// import knex from "knex";

// export default knex({
//   client: "pg",
//   connection: {
//     // host: "127.0.0.1",
//     // port: 5432,
//     user: `${process.env.DB_USER}`,
//     password: null,
//     database: `${process.env.DB_NAME}`,
//   },
// });

import pg from "pg";

const { Pool } = pg;

const pgPool = new Pool({
  user: `${process.env.DB_USER}`,
  password: null,
  database: `${process.env.DB_NAME}`,
});

export default pgPool;
