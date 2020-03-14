const connection = require("../config/mysql");

module.exports = {
  getAllBooks: searchName => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM books WHERE book_name LIKE '%${searchName}%' `,
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error());
        }
      );
    });
  },

  insertBook: setData => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO books SET ?", [setData], (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(new Error());
      });
    });
  },

  deleteBook: book_id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM books WHERE book_id = ? ",
        [book_id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error());
        }
      );
    });
  },

  updateBook: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE books SET ? WHERE book_id = ?",
        [setData, id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error());
        }
      );
    });
  }
};
