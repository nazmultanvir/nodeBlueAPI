const routes = require('express').Router();
const userController = require('../controller/userController')


// All User Data
routes.post('/signup', userController.signup);
routes.post('/signin', userController.signin);

// //Specific User Information
// routes.get('/:userId', agentController.specificAgentInfo)

// //Add New Agent
// routes.post('/', agentController.addAgentInfo);







module.exports = routes;