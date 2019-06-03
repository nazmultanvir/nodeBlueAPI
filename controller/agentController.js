const responseCode = require('../responseCode')
const connection = require('../db/db');

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
            // res.json(rows[0].agent_ID)
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
      if(name && latitude && longitude && phone && address){
        let VALUES = ''
        let sql = 'INSERT INTO `agents` (`agent_ID`, `agent_name`, `agent_latitude`, `agent_longitude`, `agent_area`, `agent_commission`, `agent_phone`, `agent_address`, `agent_join`, `agent_info_updated_on`) VALUES ('+VALUES+')'
        console.log(sql)
         responseCode(response, 201, requestData)
      }else{
        responseCode(response, 400, {}, "Required Fields are missing !")
      }
  
    }else{
      responseCode(response, 400)
    }
  }