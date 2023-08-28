const Post = require("../model/Post");

const createOne = async (data) => {
  const res = await Post.create(data);
  return res;
};

const getOneById = async (id) => {
  const res = Post.findById(id)
    .populate("author", "name profilePhoto")
    .populate({
      path: "comments",
      populate: [{ path: "author", select: "name profilePhoto" }],
    });
  return res;
};

const getAll = async () => {
  const res = await Post.find({})
    .sort("-createdAt")
    .populate("author", "name profilePhoto");
  return res;
};

const createComment = async (data, postId) => {
  const post = await Post.findById(postId);
  post.comments.push(data);
  await post.save();

  const res = await Post.findById(postId)
    .populate("author", "name profilePhoto")
    .populate({
      path: "comments",
      populate: [{ path: "author", select: "name profilePhoto" }],
    });

  return res;
};

module.exports = {
  createOne,
  getAll,
  getOneById,
};
