const mongoose = require("mongoose");
const express = require("express");
const app = express();

const Post = require("./models/post.model");

app.use(express.json());

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

app.get("/", (req, res) => {
  res.send("Hello from node API (changes)");
});

app.post("/blog/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (err) {
    console.error("Error in POST /blog/posts:", err);
    res.status(500).send("Internal Server Error");
  }
});

mongoose
  .connect(
    "mongodb+srv://albertoaraujoo:dYh1BcweiCxAslxt@postsdb.mhngbit.mongodb.net/?retryWrites=true&w=majority&appName=PostsDB"
  )
  .then((result) => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
