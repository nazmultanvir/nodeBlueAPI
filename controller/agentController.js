const responseCode = require('../responseCode')
const connection = require('../db/db');

const Agents = require('../model/Agents')

exports.allAgentInfo = (req, res) => {
    let sql = "SELECT * FROM `agents`"
    connection.query(sql, (err, rows, fields)=>{
        if(err){
            res.status(500).send( { error : err})
        }else{
            responseCode(res, 200, rows)
        }
    })
}


exports.specificAgentInfo = (req, res) => {
    let sql = "SELECT * FROM `agents` WHERE `agent_ID`="+req.params.userId;
    connection.query(sql, (err, rows, fields)=>{
        if(err){
            res.status(500).send( { error : err})
        }else{
            if(rows[0] && rows[0].agent_ID ==req.params.userId){
                responseCode(res, 200, rows[0])
            }else{
                responseCode(res, 404)
            }
        }
    })

}



exports.addAgentInfo = (request,response) =>{
    checkNull=(data)=>{  return data ? data : null }
    let requestData = request.body;
    if(requestData){
      let name = checkNull(requestData.agent_name);
      let latitude = checkNull(requestData.agent_latitude);
      let longitude = checkNull(requestData.agent_longitude)
      let area = checkNull(requestData.agent_area);
      let commission = checkNull(requestData.agent_commission);
      let phone = checkNull(requestData.agent_phone);
      let address = checkNull(requestData.agent_address)

      let agent = new Agents(name, latitude, longitude, area, commission, phone, address)
      data = agent.add()
      console.log(data)
    }else{
      responseCode(response, 400)
    }
  }
