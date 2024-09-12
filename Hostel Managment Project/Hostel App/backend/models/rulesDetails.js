const mongoose = require("mongoose");

const rulesDetailsSchema = new mongoose.Schema({
    rule: {
        type: String,
        required: true,
    },
    details: {
        type: [String],
        required: true,
    }
});

const rulesDetailsModel = mongoose.model("RulesDetails", rulesDetailsSchema);

module.exports = rulesDetailsModel;
