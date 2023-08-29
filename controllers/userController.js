const generateToken = require("../api/generateToken");
const {
  createOne,
  getOneById,
  getOneByEmail,
  updateOne,
  getAll,
} = require("../services/userService");

const createUser = async (req, res, next) => {
  try {
    const user = await createOne(req.body);

    const accessToken = generateToken(user);

    res.status(200).json({
      message: "success",
      data: { user, accessToken },
    });
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await getOneByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }
    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    const accessToken = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      message: "success",
      data: { user: others, accessToken },
    });
  } catch (error) {
    next(error);
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
    const email = req.query.email;
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
  logIn,
  getUserById,
  getUserByEmail,
  getAllUsers,
  updateUserById,
};
