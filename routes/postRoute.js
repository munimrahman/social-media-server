const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

router
  .route("/posts")
  .post(postController.createPost)
  .get(postController.getAllPost);

router.get("/top-three", postController.getTopThreePost);

router
  .route("/posts/:id")
  .get(postController.getPostById)
  .put(postController.addLoveToPost)
  .patch(postController.addCommentToPost);

module.exports = router;
