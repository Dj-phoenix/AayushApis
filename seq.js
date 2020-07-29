var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('aayush','root','GoldenSinger',{
  host: 'localhost',
  port:3306,
  dialect: 'mysql',
  directory: './seqmodels',
  define: {
        timestamps: false
    	}
});

auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); 
});