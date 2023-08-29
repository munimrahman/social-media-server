const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/users")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route("/register").post(userController.createUser);
router.route("/sign-up").post((req, res) => {
  res.json(req.body);
});
router.route("/log-in").post(userController.logIn);

router.get("/current-user", userController.getUserByEmail);

router
  .route("/users/:id")
  .get(userController.getUserById)
  .put(userController.updateUserById);

module.exports = router;
