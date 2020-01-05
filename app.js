const express = require('express')
const bodyParser = require('body-parser')


//file import
const errorController = require('./controller/errorController')
const agentRoute = require('./router/agentRouter')
 const userRoute = require('./router/userRoute')
//express and body parser
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//agent route
app.use('/app/agents', agentRoute);
app.use('/app/users', userRoute);


//error controller
app.use(errorController.get404error)


app.listen(3000)