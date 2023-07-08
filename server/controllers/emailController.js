import postEmailService from "../service/postEmailService.js";

/**
 * Controller function to take in request and pass back response to client
 * @param {Object} req Initial API Request
 * @param {Object} res Response we send back to client
 * @returns {Object}
 */
export const postEmail = async (req, res) => {
  try {
    const post = await postEmailService(req.body);
    return res.json({ success: true, message: "ok", data: post });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, errorMessage: error });
  }
};
