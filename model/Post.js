const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new Schema(
  {
    content: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
    comments: [commentSchema],
    loves: {
      type: Number,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    authorEmail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
