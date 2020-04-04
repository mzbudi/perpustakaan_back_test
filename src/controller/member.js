const {
  getAllMembers,
  deleteMember,
  updateMember,
  createMember,
} = require("../model/member");
const helper = require("../helper");

module.exports = {
  getAllMembers: async (req, res) => {
    try {
      const searchName = req.query.searchName || "";
      const result = await getAllMembers(searchName);
      return helper.response(res, 200, result);
    } catch (error) {
      return helper.response(res, 400, { message: "Terjadi Kesalahan" });
    }
  },
  deleteMember: async (req, res) => {
    try {
      const member_id = req.params.member_id;
      await deleteMember(member_id);
      return helper.response(res, 200, { message: "Data Berhasil Dihapus" });
    } catch (error) {
      return helper.response(res, 400, { message: "Terjadi Kesalahan" });
    }
  },
  updateMember: async (req, res) => {
    try {
      const setData = {
        member_name: req.body.member_name,
        member_address: req.body.member_address,
        member_gender: req.body.member_gender,
      };
      const member_id = req.params.member_id;

      await updateMember(setData, member_id);
      return helper.response(res, 200, { message: "Data Berhasil Diupdate" });
    } catch (error) {
      return helper.response(res, 400, { message: "Terjadi Kesalahan" });
    }
  },
  createMember: async (req, res) => {
    try {
      const setData = {
        member_name: req.body.member_name,
        member_address: req.body.member_address,
        member_gender: req.body.member_gender,
      };

      await createMember(setData);
      return helper.response(res, 200, { message: "Data Berhasil di Input" });
    } catch (error) {
      return helper.response(res, 400, { message: "Terjadi Kesalahan" });
    }
  },
};
