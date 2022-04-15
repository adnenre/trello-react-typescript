const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fakeData = require("./fakeDb");
dotenv.config();

// verify header
// const verifyToken = (req, res, next) => {
//   const bearerHeader = req.header["authorization"];
//   if (typeof bearerHeader != "undefined") {
//     const bearerHeader = bearerHeader.split(" ")[1];
//     req.token = bearerToken;
//     next();
//   }
// };

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5500;

let lists = [...fakeData.lists];
let users = [...fakeData.users];

const findUser = (data) => {
  const user = users.find(({ username }) => username === data.username);
  return user;
};
// FAKE DB USERS
// REGISTER ROUTE
app.post("/register", (req, res) => {
  const user = findUser(req.body);
  if (user) {
    res.json({
      status: 0,
      message: "User alreay exist !",
    });
  } else {
    const { username, email, password } = req.body;
    let newUser = { username, email, password };
    users.push({ id: users.length + 1, ...newUser });
    res.json({
      status: 1,
      message: `${req.body.username} created successfully !`,
    });
  }
});
// LOGING ROUTE
app.post("/login", (req, res) => {
  const user = findUser(req.body);

  if (user) {
    jwt.sign({ user: user }, "secretkey", (err, accessToken) => {
      res.json({
        status: 1,
        accessToken,
      });
    });
  } else {
    res.json({
      status: 0,
      message: "User Not Found !",
      hints: "try username : trello, password : trello ",
    });
  }
});

// SAVE ROUTE NEEDED WHILE DRAGGING
app.post("/save", (req, res) => {
  lists = req.body.lists;
  return res.json({ success: true });
});

//
app.get("/load", (req, res) => res.json({ lists }));

const logRunningServer = () => console.log(`Server is running on ${port}`);

app.listen(port, logRunningServer);
