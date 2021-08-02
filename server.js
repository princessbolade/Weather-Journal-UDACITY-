const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("website"));
const port = 8000;

const server = app.listen(port, () => {
  console.log("hi, i am a server and i'm running");
  console.log(`hi, i'm running on localhost : ${port}`);
});

let projectData = {};

app.post("/CreateApp", (req, res) => {
  projectData = req.body;
  console.log(projectData);
});

app.get("/SendApp", (req, res) => {
  res.send(projectData);
});
