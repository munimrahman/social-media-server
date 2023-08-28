const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

router
  .route("/posts")
  .post(postController.createPost)
  .get(postController.getAllPost);

router.route("/posts/:id").get(postController.getPostById);

module.exports = router;
