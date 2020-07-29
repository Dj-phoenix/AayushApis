const jwt = require("jsonwebtoken");
const config = require("../config/authConfigs.js");

var db = require('../seqmodels');

const tbl_admin_login = db.aayush_users;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.id = decoded.id;
    next();
  });
};


isAdmin = (req, res, next) => {
  tbl_admin_login.findOne({ where: { id: req.id } }).then(user => {
    if (user.user_name === "area51") {
      next();
      return;
    }
    res.status(403).send({
      message: "Require Authenticaation!"
    });
    return;
  });
};



const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};
module.exports = authJwt;
