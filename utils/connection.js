require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const URI = process.env.DB;
const db = mongoose.connect(URI);

module.exports = db;
