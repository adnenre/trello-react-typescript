const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fakeData = require("./fakeDb");
const { findUser, findUserByEmail } = require("./utility");
const { checkToken, SECRET_TOKEN } = require("./middleware");

dotenv.config();

const PORT = process.env.PORT;

let lists = [...fakeData.lists];
let users = [...fakeData.users];

class RequestHandler {
  //LOGIN
  login(req, res) {
    const user = findUser(users, req.body);

    if (user) {
      let token = jwt.sign({ username: user.username }, SECRET_TOKEN);
      res.json({
        status: 1,
        message: `Authentication successful for username : ${user.username}`,
        token,
      });
    } else {
      res.json({
        status: 0,
        message: "User Not Found !",
        hints: "try username : trello, password : trello ",
      });
    }
  }
  //REGISETER
  register(req, res) {
    const user = findUser(users, req.body);
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
  }

  //RESETPASSWORD
  resetPassword(req, res) {
    const { username } = findUserByEmail(users, req.body);
    if (username) {
      res.json({
        status: 1,
        message: "user found !",
      });
    } else {
      res.json({
        status: 0,
        message: "email Not Found !",
      });
    }
  }
  //SAVE
  // SAVE ROUTE NEEDED WHILE DRAGGING
  save(req, res) {
    lists = req.body.lists;
    return res.json({ success: true });
  }
  //LOAD
  load(req, res) {
    return res.json({ lists });
  }
}

const main = () => {
  const app = express();
  const handlers = new RequestHandler();
  const port = PORT || 5500;
  app.use(cors());
  app.use(
    bodyParser.urlencoded({
      // Middleware
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.post("/login", handlers.login);
  app.post("/register", checkToken, handlers.register);
  app.post("/resetPassword", checkToken, handlers.resetPassword);
  app.get("/load", checkToken, handlers.load);
  app.post("/save", checkToken, handlers.save);

  app.listen(port, () => console.log(`Server is running on ${port}`));
};

main();
