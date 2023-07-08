import "dotenv/config";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  await knex.schema.createTable("emails", (table) => {
    table.increments("id").unsigned().primary();
    table.string("title").notNullable();
    table.string("body").notNullable();
    table.string("from_address").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTable("emails");
};
