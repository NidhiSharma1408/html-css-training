const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
const uri = process.env.DB_URI;
async function run() {
    await mongoose.connect(uri);
    console.log("Connected to DB successfully");
}
module.exports = run;