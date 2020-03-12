const { userLogin } = require("../model/auth");
const md5 = require("md5");
const helper = require("../helper");

module.exports = {
  userLogin: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const result = await userLogin(username, md5(password));

      return helper.response(res, 200, result);
    } catch (error) {
      throw error;
    }
  }
};
