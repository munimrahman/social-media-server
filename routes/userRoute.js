const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", (req, res) => {
  res.send("Get All Users");
});

// router.get("/signup/confirmation/:token", userController.confirmEmail);

// router.post("/login", userController.login);

// router.get("/me", verifyToken, userController.getMe);

module.exports = router;
