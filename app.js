const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


//file import
const errorController = require('./controller/errorController')
const agentRoute = require('./router/agentRouter')
 const userRoute = require('./router/userRoute')
//express and body parser
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//agent route
app.use('/app/agents', agentRoute);
app.use('/app/users', userRoute);


//error controller
app.use(errorController.get404error)


app.listen(3000)