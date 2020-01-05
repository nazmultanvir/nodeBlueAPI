responseCode = (response, status, res, customStatus) =>{

    responseStatus ={
      '200' : 'The request has succeeded.',
      '201' : 'Successful creation occurred.',
      '204' : 'No content.',
      '400' : 'Bad Request.',
      '304' : 'Not Modified.',
      '401' : 'Unauthorized',
      '403' : 'Forbidden.',
      '404' : 'Not Found',
      '409' : 'Conflict.',
      '500' : 'Internal Server Error',
     }

    customStatus = customStatus ? customStatus : responseStatus[status]
    data = res ? res : { }
     finalResponse = {
         status : {
             code : status,
             message : customStatus
         },
         response : data
     }
    return response.status(status).send(finalResponse)
  }


  module.exports = responseCode