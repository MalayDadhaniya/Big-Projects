const mongoose = require("mongoose");

const lunchDetailsSchema = new mongoose.Schema({
  day: { type: String, required: true },
  breakfast: { type: [String], default: [] },
  lunch: { type: [String], default: [] },
  dinner: { type: [String], default: [] },
});

const LunchDetailsModel = mongoose.model("LunchDetails", lunchDetailsSchema);

module.exports = LunchDetailsModel;
