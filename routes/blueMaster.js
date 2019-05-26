var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const db = require('../db/db')


//router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())


/* GET users listing. */
router.get('/', function(req, res, next) {
  let sql = "SELECT * FROM `agents`"
  db.query(sql, (err, rows, fields)=>{
      if(err){
        res.status(500).send( { error : 'something went wrong !'})
      }else{
        res.json(rows)
      }

  })
});

module.exports = router;
