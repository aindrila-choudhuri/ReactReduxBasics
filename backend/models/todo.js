const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String
});

module.exports = mongoose.model("Todo", todoSchema);