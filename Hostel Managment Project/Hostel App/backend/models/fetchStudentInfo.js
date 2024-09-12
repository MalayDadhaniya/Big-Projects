const mongoose = require("mongoose");

const fetchStudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    date: String,
    profession: String
});

const fetchStudentModel = mongoose.model("studentinfos", fetchStudentSchema);
module.exports = fetchStudentModel;
