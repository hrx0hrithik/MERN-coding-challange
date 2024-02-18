const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://hrithikgupta52:Password@cluster1.d02on4b.mongodb.net/test2"

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoUrl);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = connectToMongo;