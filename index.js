require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const postRoute = require("./routes/post.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/posts", postRoute);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
