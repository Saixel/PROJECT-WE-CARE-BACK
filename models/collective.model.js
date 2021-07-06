const mongoose = require("mongoose");

const collectiveSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "This collective already exists"],
  },
});

exports.Collective = mongoose.model("collectives", collectiveSchema);
