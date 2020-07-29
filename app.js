require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
var cons = require('consolidate');
const cors = require("cors");
const indexRouter = require('./routes/index');
const app = express();
const handlebarsLayouts = require('handlebars-layouts'),
  handlebars = require('handlebars');
handlebarsLayouts.register(handlebars);
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('hbs', cons.handlebars);
var corsOptions = { origin: process.env.AUTHAPI };
app.use(cors(corsOptions));
app.use('/', indexRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
const models = require("./seqmodels");
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});


//error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.finalHeader = req.headerDynamic;
  res.user = req.user;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  if (err.status === 404) {
    res.render('error', res);
  } else {
    res.render('error-500', res);
  }

});

module.exports = app;
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Aayush happens on port ' + port);