const connection = require('../db/db');
const responseCode = require('../responseCode')

module.exports = class Agents {
    constructor (name, latitude, longitude, area, commission, phone, address, response){
        this.name = name;
        this.latitude = latitude
        this.longitude = longitude
        this.area = area
        this.commission = commission
        this.phone = phone
        this.address = address
        this.join = new Date()
        this.info_updated_on = new Date()
    }

    add() {
      let returnData = []
      connection.query(
          'INSERT INTO `agents` (`agent_name`, `agent_latitude`, `agent_longitude`, `agent_area`, `agent_commission`, `agent_phone`, `agent_address`, `agent_join`, `agent_info_updated_on`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [this.name, this.latitude, this.longitude, this.area, this.commission, this.phone, this.address, this.join, this.info_updated_on],(err, rows)=>{
            if(err){
              returnData=err
            }else {
              returnData = rows
            }
          }
        )



    }

}
