const mongoose = require("mongoose");

const TreeSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  healthStatus: {
    type: String,
    enum: ["Healthy", "Unhealthy", "Needs Attention"],
    default: "Healthy",
  },
  adoptedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  plantingDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tree", TreeSchema);
