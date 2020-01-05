const responseCode = require('../responseCode')
const connection = require('../db/db');

const Users = require('../model/Users')

// exports.allAgentInfo = (req, res) => {
//     let sql = "SELECT * FROM `agents`"
//     connection.query(sql, (err, rows, fields)=>{
//         if(err){
//             res.status(500).send( { error : err})
//         }else{
//             responseCode(res, 200, rows)
//         }
//     })
// }


// exports.specificAgentInfo = (req, res) => {
//     let sql = "SELECT * FROM `agents` WHERE `agent_ID`="+req.params.userId;
//     connection.query(sql, (err, rows, fields)=>{
//         if(err){
//             res.status(500).send( { error : err})
//         }else{
//             if(rows[0] && rows[0].agent_ID ==req.params.userId){
//                 responseCode(res, 200, rows[0])
//             }else{
//                 responseCode(res, 404)
//             }

//         }
//     })

// }



exports.signup = (request,response) =>{
    checkNull=(data)=>{  return data ? data : null }
    let requestData = request.body;
    if(requestData){
      let username = checkNull(requestData.username);
      let password = checkNull(requestData.password);
      let phone = checkNull(requestData.phone);
      let user = new Users(username, password, phone)
      let sql = "SELECT * FROM `users` WHERE `username`='"+username+`'`;
        connection.query(sql, (err, rows, fields)=>{
            if(err){
                response.status(500).send( { error : err})
            }else{
                if(rows[0]){
                    responseCode(response, 409)
                }else{
                    data = user.add()
                    responseCode(response, 200)
                }
            }
        })

    }else{
      responseCode(response, 400)
    }
  }
