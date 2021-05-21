var express = require("express");
var router = express.Router();
const pkg = require("../package.json");

router.get("/health", (req, res) => {
  res.send({
    name: pkg.name,
    version: pkg.version,
  });
});

module.exports = router;
