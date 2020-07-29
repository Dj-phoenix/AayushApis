
var asyncAll = require('async');
const authConfigs = require("../config/authConfigs.js");
const jwt = require("jsonwebtoken");
const queryModel = require('../allApiLogic/apiLogic');
const signinJwt = (req, res) => {
 queryModel.getSignInJwtDetails(req.query, function (err, result) {
    const resp = result.getSignInJwtDetails.rows || []
    const token = jwt.sign({ id: resp.id }, authConfigs.secret, {
      expiresIn: 86400 // 24 hours
    });
    resp.accessToken = token
    resp.isAuthenticated = true
    res.send(resp);
  });
}


module.exports = { signinJwt }
