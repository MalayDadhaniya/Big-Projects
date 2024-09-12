const mongoose = require("mongoose");

const roomDetailsSchema = new mongoose.Schema({
    room_no: Number,
    total_space: Number,
    total_students: Number
});

module.exports = mongoose.model("RoomDetails", roomDetailsSchema);
