const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: [true, "Email Already Exists"],
    },
    profilePhoto: {
      type: String,
    },
    address: {
      type: String,
    },
    university: {
      type: String,
    },
    about: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [4, "Password must be at least 4 characters."],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const { password } = this;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordMatch = bcrypt.compareSync(password, hash);
  return isPasswordMatch;
};

userSchema.methods.generateConfirmationToken = function () {
  const confirmationToken = crypto.randomBytes(20).toString("hex");
  this.confirmationToken = confirmationToken;

  const date = new Date();
  date.setMinutes(date.getMinutes() + 10);
  this.confirmationTokenExpires = date;

  return confirmationToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
