const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connectDB(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database is connected successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
