const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://gtiwari037:DTJizkPfPqAYqe74@cluster0.8c0r8xj.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

// exporting a db
module.exports = db;
