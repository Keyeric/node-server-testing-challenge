const express = require("express");
const cors = require("cors");
const secret = require("../config/secret");
const protect = require("../auth/protected");
const Hobbits = require("../table/tableModel");

const server = express();

//Router

server.use(express.json());
server.use(cors());

//Endpoints

//Base url
server.get("/", (req, res) => {
  res.send("<h1> Server starts here</h1> <h2> Navigate to</h2> <h3>/api</h3>");
});

server.get("/hobbits", (req, res) => {
  Hobbits.getAll()
    .then((hobbits) => {
      res.status(200).json(hobbits);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = server;
