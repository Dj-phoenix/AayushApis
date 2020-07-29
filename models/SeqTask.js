const db = require('../seqmodels');
const User_login = db.aayush_users;
const bCrypt = require('bcrypt-nodejs');
const SeqTask = {
  getSignInJwtDetails: function (query, done) {

    User_login.findOne({ where: { user_name: query.username } }).then(function (data) {
      if (!data) { return done(null, false); }
      let passwordIsValid = bCrypt.compareSync(
        query.password,
        data.user_password
      );
      if (!passwordIsValid) {
        return done(null, false);
      }
      if (data) {
        return done(null, data);
      }

    }).catch(err => {
      return done(null, false);
    });
  }
}

module.exports = SeqTask;                       