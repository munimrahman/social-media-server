const User = require("../model/User");

const createOne = async (userData) => {
  const user = await User.create(userData);
  return user;
};

const getOneById = async (id) => {
  const res = User.findById(id);
  return res;
};

const getOneByEmail = async (email) => {
  const res = User.findOne({ email });
  return res;
};

const updateOne = async (data, id) => {
  const updatedRes = await User.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return updatedRes;
};

const getAll = async () => {
  const res = User.find({});
  return res;
};

module.exports = {
  createOne,
  getOneById,
  getOneByEmail,
  updateOne,
  getAll,
};
