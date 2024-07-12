require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(connectionString, {
      dbName: process.env.DB_NAME,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
  }
}

module.exports = connectDb;