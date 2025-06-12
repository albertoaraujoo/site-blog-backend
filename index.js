const mongoose = require("mongoose");
const express = require("express");
const app = express();

const Post = require("./models/post.model");

app.use(express.json());

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

app.get("/blog/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/blog/post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/blog/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (error) {
    console.error("Error in POST /blog/posts:", err);
    res.status(500).json({ message: error.message });
  }
});

//update a post
app.put("/blog/post/:id", async (req, res) => {
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
});

//delete a post
app.delete("/blog/post/:id", async (req, res) => {
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
});

mongoose
  .connect(
    "mongodb+srv://albertoaraujoo:dYh1BcweiCxAslxt@postsdb.mhngbit.mongodb.net/?retryWrites=true&w=majority&appName=PostsDB"
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
