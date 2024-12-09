const express = require("express");
const router = express.Router();
const { adoptTree, getUserTrees } = require("../controllers/treeController");
const authMiddleware = require("../middlewares/authMiddleware");

// Adopt a tree
router.post("/adopt", authMiddleware, adoptTree);

// Get trees adopted by the user
router.get("/", authMiddleware, getUserTrees);

module.exports = router;
