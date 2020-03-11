const {
  createBorrowDetail,
  createBorrowingStatus,
  deleteBorrowingDetail,
  deleteBorrowingStatus,
  getBorrowingStatus,
  getAllBorrowingStatus,
  getBorrowingDetail
} = require("../model/borrow");
const helper = require("../helper");
module.exports = {
  createBorrowingStatus: async (req, res) => {
    try {
      const books = req.body.books;
      console.log(req.body.member_id);
      const setData = {
        member_id: req.body.member_id,
        borrowing_status: "PINJAM"
      };
      const result_borrow = await createBorrowingStatus(setData);
      console.log(result_borrow.insertId);

      await Promise.all(
        books.map(async book => {
          let data = {
            borrow_id: result_borrow.insertId,
            book_id: book.book_id,
            borrow_details_status: "PINJAM"
          };
          await createBorrowDetail(data);
        })
      );
      return helper.response(res, 200, { message: "Peminjaman Berhasil" });
    } catch (error) {
      return helper.response(res, 200, { message: "Terjadi Kesalahan" });
    }
  },
  deleteBorrowingStatus: async (req, res) => {
    try {
      const borrow_id = req.params.borrow_id;
      await deleteBorrowingStatus(borrow_id);
      await deleteBorrowingDetail(borrow_id);
      return helper.response(res, 200, { message: "Berhasil Dihapus" });
    } catch (error) {
      return helper.response(res, 200, { message: "Terjadi Kesalahan" });
    }
  },
  getAllBorrowingStatus: async (req, res) => {
    try {
      const result = await getAllBorrowingStatus();
      return helper.response(res, 200, result);
    } catch (error) {
      return helper.response(res, 200, { message: "Terjadi Kesalahan" });
    }
  },
  getBorrowingStatus: async (req, res) => {
    try {
      const borrow_id = req.params.borrow_id;
      const result_borrowing = await getBorrowingStatus(borrow_id);
      const result_borrow_details = await getBorrowingDetail(borrow_id);
      return helper.response(res, 200, {
        result_borrowing,
        result_borrow_details
      });
    } catch (error) {
      throw error;
      // return helper.response(res, 200, { message: "Terjadi Kesalahan" });
    }
  }
};
