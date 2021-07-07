const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: String,
  instructions: {
    type: String,
    required: [true, "Instructions are required"],
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
