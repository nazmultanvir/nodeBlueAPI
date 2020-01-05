var mysql      = require('mysql');

const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'tanvorhw_t33user',
  password : 'Tanvir786',
  database : 'tanvorhw_nodeApi'
});

module.exports = pool;