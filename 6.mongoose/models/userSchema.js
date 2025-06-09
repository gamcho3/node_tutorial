const mongoose = require("mongoose");
const { Schema } = mongoose;

// 스키마 지정
const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
