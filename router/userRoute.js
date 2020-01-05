const routes = require('express').Router();
const userController = require('../controller/userController')


// All User Data
routes.get('/signup', userController.signup);

// //Specific User Information
// routes.get('/:userId', agentController.specificAgentInfo)

// //Add New Agent
// routes.post('/', agentController.addAgentInfo);







module.exports = routes;