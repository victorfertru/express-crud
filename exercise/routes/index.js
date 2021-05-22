var express = require("express");
var router = express.Router();
const pkg = require("../package.json");

router.get("/", function (_, res) {
  res.render("index", { title: "Express" });
});

router.get("/health", (_, res) => {
  res.status(200).send(`Project: ${pkg.name} - Version: ${pkg.version}`);
});

module.exports = router;
