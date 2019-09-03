const express = require("express");

const server = express();

server.use(express.json());

let posts = [
  {
    title: "How to train your dog",
    contents: "Google it"
  }
];

server.get("/api/posts", (req, res) => {
  let result = [...posts];

  res.status(200).json(result);
});

server.post("/api/posts", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json(posts);
});

module.exports = server;
