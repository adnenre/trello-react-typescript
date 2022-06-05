const jwt = require("jsonwebtoken");
const SECRET_TOKEN = "Trello_secret_token_0125479fazefsdqdfmlkjee";
let checkToken = (req, res, next) => {
  let token =
    req.headers["x-access-token"] || req.headers["authorization"] || ""; // Express headers are auto converted to lowercase

  if (token) {
    if (token.startsWith("Bearer")) {
      // Remove Bearer from string
      token = token.split(" ")[1];
    }

    jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
      console.log(token, SECRET_TOKEN);
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

module.exports = {
  checkToken: checkToken,
  SECRET_TOKEN,
};
