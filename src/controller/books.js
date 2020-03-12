const {
  getAllBooks,
  insertBook,
  deleteBook,
  updateBook
} = require("../model/books");
const helper = require("../helper");

module.exports = {
  getAllBooks: async (req, res) => {
    try {
      const result = await getAllBooks();
      return helper.response(res, 200, result);
    } catch (error) {
      return helper.response(res, 400, { message: "Terjadi Kesalahan" });
    }
  },
  insertBook: async (req, res) => {
    try {
      const setData = {
        book_name: req.body.book_name,
        book_author: req.body.book_author,
        book_status: "TERSEDIA"
      };

      const result = await insertBook(setData);
      return helper.response(res, 200, { message: "Data Berhasil di Input" });
    } catch (error) {
      return helper.response(res, 400, { message: "Terjadi Kesalahan" });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const book_id = req.params.book_id;
      await deleteBook(book_id);
      return helper.response(res, 200, { message: "Data Berhasil di Hapus" });
    } catch (error) {
      return helper.response(res, 400, { message: "Terjadi Kesalahan" });
    }
  },

  updateBook: async (req, res) => {
    try {
      const setData = {
        book_name: req.body.book_name,
        book_author: req.body.book_author,
        book_status: req.body.book_status
      };
      const book_id = req.params.book_id;

      const result = await updateBook(setData, book_id);
      return helper.response(res, 200, { message: "Data Berhasil di Update" });
    } catch (error) {
      return helper.response(res, 400, { message: "Data Gagal Di Update" });
    }
  }
};
