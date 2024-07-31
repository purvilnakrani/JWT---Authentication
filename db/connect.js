const mongoose = require("mongoose");

const connectDB = function () {
  return mongoose.connect(
    "mongodb+srv://purvilpatel1234:1234@cluster0.h1jl7ko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connectDB;
