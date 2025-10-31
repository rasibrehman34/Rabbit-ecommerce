const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connected successfully");
  } catch (err) {
    console.error("mongoDB connection failed");
    process.exit(1)
  }
};

module.exports = connectDB;
