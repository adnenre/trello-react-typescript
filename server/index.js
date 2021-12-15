const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5500;

let lists = [];

app.post("/save", (req, res) => {
  console.log(req.body);
  lists = req.body.lists;
  return res.json({ success: true });
});
app.get("/load", (req, res) => res.json({ lists }));

const logRunningServer = () => console.log(`Server is running on ${port}`);
app.listen(port, logRunningServer);
