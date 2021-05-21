var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/all", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.get("/search:name?", async (req, res) => {
  const { name } = req.query;
  const user = await User.findOne({ where: { name } });
  res.send(user.toJSON());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundUser = await User.findByPk(id);
  foundUser ? res.send(foundUser.toJSON()) : res.send("Not user found");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const affectedRows = await User.update(req.body, { where: { id: id } });

  affectedRows
    ? res.send(`The number of rows affected is ${affectedRows}`)
    : res.send("None row was affected");
});

router.post("/insert", async (req, res) => {
  await User.create(req.body);
  res.sendStatus(201);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const destroyRows = await User.destroy({ where: { id: id } });
  destroyRows
    ? res.send(`The number of rows deleted is ${destroyRows}`)
    : res.send("None row destroyed");
});

module.exports = router;
