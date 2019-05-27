const express = require('express')
var bodyParser = require('body-parser')
var mysql      = require('mysql');


var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'tanvorhw_mainUser',
  password : 'tanvir786',
  database : 'tanvorhw_nodeApi'
});


const app = express()

app.use(bodyParser.json())


const port = 3000

app.get('/app/agents', function (req, res) {
    let sql = "SELECT * FROM `agents`"
 connection.query(sql, (err, rows, fields)=>{
      if(err){
        res.status(500).send( { error : err})
      }else{
        res.json(rows)
      }

  })
 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))