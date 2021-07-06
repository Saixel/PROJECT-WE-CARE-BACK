const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  body: {
    type: String,
    required: [true, "Body is required"],
  },
  type: {
    type: String,
    enum: ["news", "interviews"],
    default: "news",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  collective: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "collectives",
    },
  ],
});

exports.New = mongoose.model("news", newSchema);
