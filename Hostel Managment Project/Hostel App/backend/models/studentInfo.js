const mongoose = require("mongoose");

const studentInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    date: String,
    profession: String
});

const studentInfoModel = mongoose.model("studentInfo", studentInfoSchema);
module.exports = studentInfoModel;
