const express = require("express");

const PORT = 4000;
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.post("/echo", (req, res) => {
  res.send(req.body);
});

server.listen(PORT);
