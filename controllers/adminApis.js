
const authConfigs = require("../config/authConfigs.js");
const jwt = require("jsonwebtoken");
const queryModel = require('../allApiLogic/apiLogic');

const signinJwt = async (req, res) => {
const result = await queryModel.getSignInJwtDetails(req.body,res)
const resp = result.getSignInJwtDetails.rows || []
    const token = jwt.sign({ id: resp.id }, authConfigs.secret, {
      expiresIn: 86400 // 24 hours
    });
    resp.accessToken = token
    resp.isAuthenticated = true
    res.send(resp);

 
}

const getSecureData =  (req, res) => {
        res.send(true);
  }


module.exports = { signinJwt,getSecureData }
