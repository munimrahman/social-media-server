const { createOne } = require("../services/userService");

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

module.exports = { createUser };
