const connection = require('../db/db');
const responseCode = require('../responseCode')

module.exports = class Agents {
    constructor (username, password, phone){
        this.username = username;
        this.phone = phone
        this.password = password
    }
    add() {
      let returnData = []
      connection.query(
          'INSERT INTO `users` (`username`, `phone`, `password`) VALUES (?, ?, ?)',
          [this.username, this.phone, this.password],(err, rows)=>{
            if(err){
              returnData=err
            }else {
              returnData = rows
            }
          }
        )
    }

}
