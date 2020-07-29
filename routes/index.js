const express = require('express');
const router = express.Router();
const adminApis = require('../controllers/adminApis');

//JWT Starts From Here
router.post('/api/auth/signin',adminApis.signinJwt);
const { authJwt } = require("../middlewares");

// router.get(
//   "/apis/ar51/getDraftPostList",
//   [authJwt.verifyToken,authJwt.isAdmin],
//   adminApis.getDraftPostList
// )

module.exports = router;
