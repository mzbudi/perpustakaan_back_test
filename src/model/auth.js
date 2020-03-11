const connection = require("../config/mysql");

module.exports = {
  userLogin: (username, password) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT username FROM admin WHERE username = ? AND password = ?",
        [username, password],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(res);
        }
      );
    });
  }
};
