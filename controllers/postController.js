const {
  createOne,
  getAll,
  getOneById,
  getTopThree,
  lovePost,
  createComment,
  getByEmail,
} = require("../services/postService");

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

const getPostByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const post = await getByEmail(email);

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

const getTopThreePost = async (req, res) => {
  try {
    const posts = await getTopThree();

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

const addLoveToPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await lovePost(req.body, id);

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

const addCommentToPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await createComment(req.body, id);
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

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  getTopThreePost,
  addLoveToPost,
  addCommentToPost,
  getPostByEmail,
};
