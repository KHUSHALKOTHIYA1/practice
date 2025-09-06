const mongoose = require("mongoose");

const MongoUrl = "mongodb://localhost:27017/DEV";

mongoose.connect(MongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("db is Connected");
});

db.on("error", () => {
  console.log("db is in error");
});

db.on("disconnected", () => {
  console.log("db is disconnected");
});

module.exports = db;
