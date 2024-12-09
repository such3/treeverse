const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  treesAdopted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tree",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
