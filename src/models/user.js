const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    emailId: {
      type: String,
      unique: true,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new erro("invalid email id");
        }
      },
    },
    password: {
      type: String,
      validator(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("enter a strong password");
        }
      },
    },
    age: { type: String },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new error("gender data is not correct");
        }
      },
    },
    photoUrl: {
      type: String,
      validator(value) {
        if (!validator.isURL(value)) {
          throw new error("invalid ");
        }
      },
    },
    about: { type: String, default: "this is a default about of the user" },
    skills: { type: [String] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
