const responseCode = require('../responseCode')

exports.get404error = (req, res, next)=>{
    responseCode(res, 404)
}