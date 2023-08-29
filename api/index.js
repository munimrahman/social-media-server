const express = require("express");
const userRoute = require("./userRoute");
const postRoute = require("./postRoute");

const router = express.Router();

router.use("/", userRoute);
router.use("/", postRoute);

module.exports = router;
