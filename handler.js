'use strict';
const axios = require("axios");
module.exports.hello = async event => {

    const request = {
        "from":"InfoSMS",
        "to":`${process.env.myNumber}`,
        "text":"We are now serverless"
    }
    const header = `App ${process.env.smsApiKey}`;

    console.log("header",header)
    const sendSMS = axios({
        method:'post',
        url:'https://nzdnwj.api.infobip.com/sms/2/text/single',
        data: request,
        headers:{
            Authorization:header
        }
    })

    return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
