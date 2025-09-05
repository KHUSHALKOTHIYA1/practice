const express = require("express");
const app = express();

app.use("/work", (req, res) => {});

app.listen(7777, () => {
  console.log("server is running");
});
