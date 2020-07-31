const express = require('express');
const router = express.Router();
const adminApis = require('../controllers/adminApis');
const { authJwt } = require("../middlewares");
router.post('/apis/auth/signin',adminApis.signinJwt);
router.get(
   "/apis/ar51/getSecureData",
   [authJwt.verifyToken,authJwt.isAdmin],
   adminApis.getSecureData
 )

module.exports = router;
