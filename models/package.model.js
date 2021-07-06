const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: String,
    enum: ["paid", "free"],
  },
  date: {
    type: Date,
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
  content: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "activities",
    },
  ],
});

exports.Package = mongoose.model("packages", packageSchema);
