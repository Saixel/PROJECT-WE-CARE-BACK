const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
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
  phrase: String,
});

exports.Activity = mongoose.model("activities", activitySchema);
