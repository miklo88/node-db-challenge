const express = require("express");

// SERVER
const server = express();

// SERVER API
server.get("/", (req, res) => {
  res.status(200).json({
    message: "API TEST"
  });
});

// SERVER API ERROR HANDLER
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "API FAIL"
  });
});

module.exports = server;
