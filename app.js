const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./db');


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