const Tree = require("../models/tree.js");
const User = require("../models/User");

exports.adoptTree = async (req, res) => {
  const { species, location } = req.body;
  const userId = req.userId; // From middleware

  try {
    const newTree = new Tree({
      species,
      location,
      adoptedBy: userId,
    });

    await newTree.save();

    // Update user's adopted trees
    await User.findByIdAndUpdate(userId, {
      $push: { treesAdopted: newTree._id },
    });

    res.json({ msg: "Tree adopted successfully", tree: newTree });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getUserTrees = async (req, res) => {
  try {
    const trees = await Tree.find({ adoptedBy: req.userId });
    res.json(trees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
