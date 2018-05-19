const request = require('async-request');

const defaultGetParams = {
  q: 'London,uk',
  appid: process.env.APP_ID,
};

const sendRequest = async () => {
  try {
    // response.statusCode
    // response.headers
    // response.body

    const response = await request(process.env.API_URL, {
      method: 'GET',
      data: defaultGetParams,
    });
// console.log(response);
    return JSON.parse(response.body);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  sendRequest,
};
