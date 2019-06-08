var mysql      = require('mysql');

const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tanvorhw_bluecrm'
});

module.exports = pool;