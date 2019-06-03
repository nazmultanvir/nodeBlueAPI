const express = require('express')
const bodyParser = require('body-parser')


//file import
const errorController = require('./controller/errorController')
const agentRoute = require('./router/agentRouter')

//express and body parser
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//agent route
app.use('/app/agents', agentRoute);


//error controller
app.use(errorController.get404error)


const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))