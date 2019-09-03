const express = require("express");

actions = require("./data/db");

const server = express();

server.use(express.json());

// server.get("/api/posts", (req, res) => {
//   actions
//     .find()
//     .then(posts => {
//       res.status(201).json(posts);
//     })
//     .catch(() => {
//       res
//         .status(500)
//         .json({ error: "The posts information could not be retrieved." });
//     });
// });

// server.get("/api/posts/:id", (req, res) => {
//   const id = req.params.id;
//   actions
//     .findById(id)
//     .then(post => {
//       if (post.length != 0) {
//         res.status(201).json(post);
//       } else {
//         res
//           .status(404)
//           .json({ error: "The post with the specified ID does not exist." });
//       }
//     })
//     .catch(() => {
//       res
//         .status(500)
//         .json({ error: "The post information could not be retrieved." });
//     });
// });

// server.get("/api/posts/:id/comments", (req, res) => {
//   const id = req.params.id;
//   actions
//     .findPostComments(id)
//     .then(comments => {
//       if (comments.length != 0) {
//         res.status(201).json(comments);
//       } else {
//         res
//           .status(404)
//           .json({ error: "The comments information could not be retrieved." });
//       }
//     })
//     .catch(() => {
//       res
//         .status(500)
//         .json({ error: "The post information could not be retrieved." });
//     });
// });

// server.post("/api/posts", (req, res) => {
//   const post = req.body;

//   actions
//     .insert(post)
//     .then(() => {
//       if (!post.title || !post.contents) {
//         res.status(400).json({
//           errorMessage: "Please provide title and contents for the post"
//         });
//       } else {
//         res.status(201).json(post);
//       }
//     })
//     .catch(() => {
//       res.status(500).json({
//         errorMessage:
//           "There was an error while saving the post to the database."
//       });
//     });
// });
