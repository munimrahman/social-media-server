const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const notFoundHandler = require("./utils/notFoundHandler");
const globalErrorHandler = require("./utils/globalErrorHandler");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello From Social Media Server");
});

app.use(
  "/api/v1",
  (req, res, next) => {
    // let i = 1;
    // while (i < 999999) {
    //   console.log(i);
    //   i++;
    // }
    next();
  },
  router
);

app.all("*", notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
