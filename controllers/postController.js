const { createOne, getAll, getOneById } = require("../services/postService");

const createPost = async (req, res) => {
  try {
    const post = await createOne(req.body);

    res.status(200).json({
      message: "success",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await getAll();

    res.status(200).json({
      message: "success",
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await getOneById(id);

    res.status(200).json({
      message: "success",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports = { createPost, getAllPost, getPostById };
