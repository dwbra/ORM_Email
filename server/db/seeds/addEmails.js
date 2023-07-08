import { faker } from "@faker-js/faker";

/**
 * Function to generate fake email
 * @returns {Object}
 */
const fakeEmail = () => ({
  from_address: faker.internet.email(),
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("emails").del();

  const fakeEmails = [];
  while (fakeEmails.length < 100) {
    fakeEmails.push(fakeEmail());
  }
  await knex("emails").insert(fakeEmails);
};
