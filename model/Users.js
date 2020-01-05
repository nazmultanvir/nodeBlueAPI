const connection = require('../db/db');
const responseCode = require('../responseCode')

module.exports = class Agents {
    constructor (name, username, password, phone){
        this.name = name
        this.username = username;
        this.phone = phone
        this.password = password
    }
    add() {
      let returnData = []
      connection.query(
          'INSERT INTO `users` (`name`, `username`, `phone`, `password`) VALUES (?, ?, ?, ?)',
          [this.name, this.username, this.phone, this.password],(err, rows)=>{
            if(err){
              returnData=err
            }else {
              returnData = rows
            }
          }
        )
    }

}
