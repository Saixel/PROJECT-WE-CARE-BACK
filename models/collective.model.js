const mongoose = require("mongoose");

const collectiveSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "This collective already exists"],
  },
  initials: String,
});

exports.Collective = mongoose.model("collectives", collectiveSchema);
