const { userLogin } = require("../model/auth");
const md5 = require("md5");

module.exports = {
  userLogin: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const result = await userLogin(username, md5(password));

      return res.json(result);
    } catch (error) {
      throw error;
    }
  }
};
