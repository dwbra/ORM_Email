import knex from "../db/config.js";

/**
 * Service function that handles the data layer functionality
 * @param {Object} requestData The request body data
 * @returns {Object} ID number of the newly inserted row
 */
const postEmailService = async (requestData) => {
  const { emailAddress, emailBody, emailTitle } = requestData;
  const [id] = await knex("emails")
    .insert({
      from_address: emailAddress,
      body: emailBody,
      title: emailTitle,
    })
    .returning("id");
  return id;
};

export default postEmailService;
