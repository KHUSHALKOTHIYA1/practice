const express = require("express");
const app = express();
const db = require("./src/config/database");
const User = require("./src/models/user");
const bcrypt = require("bcrypt");
const validateSignUpDate = require("./src/utils/validation");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { userAuth } = require("./src/middleware.js/auth");

app.use(express.json());
app.use(cookieParser());

app.post("/register", async (req, res) => {
  try {
    validateSignUpDate(req);
    const { firstName, lastName, emailId, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      emailId,
      password: hashedPassword,
    });
    await newUser.save();
    res.send("user registered successfully");
  } catch (error) {
    return res.status(500).json({ Message: error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId });
    if (!user) throw new Error("user not valid");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("password is not correct");

    const token = jwt.sign({ _id: user._id }, "Kothiya@1009", {
      expiresIn: "1d",
    });

    res.cookie("token", token, {});
    res.json({
      message: "login successful",
    });
  } catch (error) {
    return res.status(500).json({ Message: error });
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    return res.status(500).json({ Message: error });
  }
});

app.get("/user", async (req, res) => {
  const user = req.body.userId;
  try {
    const user1 = await User.findById(user);
    res.send("user fetched", user1);
  } catch (error) {
    return res.status(500).json({ Message: "internla server error" });
  }
});

app.patch("/update", async (req, res) => {
  try {
    const ALLOWED_UPDATES = [
      "userId",
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];

    const isUpdateAllowed = Object.keys(data).every((k) => {
      ALLOWED_UPDATES.includes(k);
    });
    if (!isUpdateAllowed) {
      res.status(400).send("update not allowed");
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params?.userId,
      req.body,
      {
        runValidators: true,
      }
    );
    await updateUser.save();
    res.send("user updated successfully");
  } catch (error) {
    return res.status(500).json({ Message: "internale server error" });
  }
});

app.delete("/delete", async (req, res) => {
  const userId = req.body.userId;
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  } catch (error) {
    return res.status(500).json({ Message: "internal server error" });
  }
});

app.listen(7777, () => {
  console.log("server is running");
});
