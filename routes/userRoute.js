const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/users")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.get("/current-user", userController.getUserByEmail);

router
  .route("/users/:id")
  .get(userController.getUserById)
  .put(userController.updateUserById);

module.exports = router;
