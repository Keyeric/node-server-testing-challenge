const express = require("express");
const cors = require("cors");
const secret = require("../config/secret");
const protect = require("../auth/protected");

const server = express();

//Router

server.use(express.json());
server.use(cors());

//Endpoints

//Base url
server.get("/", (req, res) => {
  res.send("<h1> Server starts here</h1> <h2> Navigate to</h2> <h3>/api</h3>");
});
module.exports = server;
