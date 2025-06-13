const Post = require("../models/post.model.js");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (error) {
    console.error("Error in POST /api/posts", error);
    res.status(500).json({ message: error.message });
  }
};

const updateAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const updatedPost = await Post.findById(id);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createAPost,
  updateAPost,
  deleteAPost,
};
