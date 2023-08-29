const {
  createOne,
  getOneById,
  getOneByEmail,
  updateOne,
  getAll,
} = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const user = await createOne(req.body);

    res.status(200).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getOneById(id);

    res.status(200).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await getOneByEmail(email);

    res.status(200).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await updateOne(req.body, id);

    res.status(200).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const email = req.query.email;
    const users = await getAll();

    res.status(200).json({
      message: "success",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  updateUserById,
};
