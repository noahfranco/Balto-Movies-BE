const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

// routs to endpoints in flashCards file

server.get("/", (req, res) => {
    res.status(200).json({ response: "Running on PORT"});
})

module.exports = server;