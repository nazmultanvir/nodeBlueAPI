const routes = require('express').Router();
const responseCode = require('../responseCode')

routes.get('/', (req, res) => {
    responseCode(res , 200, { message: 'Connected!' })
});

module.exports = routes;