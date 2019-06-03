const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./db/db');
const responseCode = require('./responseCode')

const routes = require('./router/routerTemplate')
const agentRoute = require('./router/agentRouter')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000


app.use('/app', routes);
app.use('/app/agents', agentRoute);



app.use(function (req, res, next) {
  responseCode(res, 404)
})

// app.get('/app/agents', function (req, res) {
//     let sql = "SELECT * FROM `agents`"
//  connection.query(sql, (err, rows, fields)=>{
//       if(err){
//         res.status(500).send( { error : err})
//       }else{
//         res.json(rows)
//       }
//   })
 
// })



// app.post('/app/agents',function(request,response){
//   let requestData = request.body;
//   if(requestData){
//     //"agent_name, agent_latitude, agent_longitude, agent_area, agent_commission, agent_phone, agent_address, agent_join"
//     let name = requestData[0].agent_name;
//     let latitude = requestData[0].agent_latitude;
//     let longitude = requestData[0].agent_longitude
//     let area = requestData[0].agent_area;
//     let commission = requestData[0].agent_commission
//     let phone = requestData[0].agent_phone;
//     let address = requestData[0].agent_address
//     if(name && latitude && longitude && phone && address){
//       responseCode(response, 500, requestData)
//     }else{
//       response.status(500);
//       response.json(requestData[0].agent_name)
//     }

//   }else{
//     response.status(404);
//       response.json(requestData)
//   }
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))