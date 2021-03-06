const connection = require("../config/mysql");

module.exports = {
  createBorrowDetail: setData => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO borrow_details SET ?",
        setData,
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
  createBorrowingStatus: setData => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO borrowing SET ?", setData, (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(new Error(err));
      });
    });
  },
  deleteBorrowingStatus: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM borrowing WHERE borrow_id = ?",
        id,
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
  deleteBorrowingDetail: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM borrow_details WHERE borrow_id = ?",
        id,
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
  getAllBorrowingStatus: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM borrowing", (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(new Error(err));
      });
    });
  },
  getBorrowingStatus: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM borrowing where borrow_id = ?",
        [id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
  getBorrowingDetail: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM borrow_details where borrow_id = ?",
        [id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
  updateBorrowingStatus: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE borrowing SET ? where borrow_id = ?",
        [setData, id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
  updateBorrowingDetail: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE borrow_details SET ? where borrow_id = ?",
        [setData, id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
  bookStatusChange: (id, status) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE books SET book_status = '${status}' where book_id = '${id}'`,
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  }
};
