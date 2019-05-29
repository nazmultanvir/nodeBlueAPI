var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tanvorhw_mainUse',
  password : 'tanvir786',
  database : 'tanvorhw_blueCrm'
});
 

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


module.exports = connection