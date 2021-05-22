var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.get("/", function (_, res) {
  res.send("Holi, soy la página principal de los posts 😎");
});

router.get("/all", async (_, res) => {
  const posts = await Post.findAll();
  posts
    ? res.status(200).send(posts)
    : res.status(404).send("None posts found. 😪");
});

router.get("/search:author?", async (req, res) => {
  const { author } = req.query;
  const authorPosts = await Post.findAll({
    where: {
      author,
    },
  });
  authorPosts
    ? res.status(200).send(authorPosts)
    : res.status(404).send("None author with name '" + author + "' 😪");
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const postFound = await Post.findByPk(id);
  postFound
    ? res.status(200).send(postFound.toJSON())
    : res.status(404).send("None post found 😪");
});

router.post("/create", async (req, res) => {
  const newPost = await Post.create(req.body);

  newPost
    ? res.status(200).send("Post created sucesfully! 🥳")
    : res.status(404).send("Error. Post couldn't be created 😥");
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPost = await Post.update({ title, content }, { where: { id } });
  updatedPost
    ? res.status(200).send(`${updatedPost} rows deleted.`)
    : res.status(404).send("None post found with id " + id + " 😥");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Post.destroy({ where: { id } });
  deletedPost
    ? res.status(200).send(`${deletedPost} rows deleted.`)
    : res.status(404).send("None post found with id " + id + " 😥");
});

module.exports = router;
