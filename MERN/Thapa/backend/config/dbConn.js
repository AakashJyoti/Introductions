const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("MongoDB connection Successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
