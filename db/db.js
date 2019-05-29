var mysql      = require('mysql');


let dev = true;

var connectionLive = mysql.createPool({
  host     : 'localhost',
  user     : 'tanvorhw_mainUser',
  password : 'tanvir786',
  database : 'tanvorhw_nodeApi'
});

var connectionLocal = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tanvorhw_bluecrm'
});

connection = dev ? connectionLocal : connectionLive



module.exports = connection