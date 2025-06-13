const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getOnePost,
  createAPost,
  updateAPost,
  deleteAPost,
} = require("../controllers/post.controller.js");

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.post("/", createAPost);
router.put("/:id", updateAPost);
router.delete("/:id", deleteAPost);

module.exports = router;
