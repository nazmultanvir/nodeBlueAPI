const routes = require('express').Router();
const agentController = require('../controller/agentController')


// All User Data
routes.get('/', agentController.allAgentInfo);

//Specific User Information
routes.get('/:userId', agentController.specificAgentInfo)

//Add New Agent
routes.post('/', agentController.addAgentInfo);







module.exports = routes;