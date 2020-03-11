const connection = require("../config/mysql");

module.exports = {
  getAllMembers: searchName => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM member WHERE member_name LIKE '%${searchName}%' `,
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error());
        }
      );
    });
  },
  deleteMember: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM member WHERE id_member = ?",
        [id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error());
        }
      );
    });
  },
  updateMember: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE member SET ? WHERE id_member = ?",
        [setData, id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error());
        }
      );
    });
  },
  createMember: setData => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO member SET ?", setData, (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(new Error());
      });
    });
  }
};
