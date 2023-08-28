const User = require("../model/User");

const createOne = async (userData) => {
  const user = await User.create(userData);
  return user;
};

module.exports = {
  createOne,
};
