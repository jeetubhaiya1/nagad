import axios from 'axios';

//BASE_URL we need to define --> https://www.alphavantage.co/query

//end point --> function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=0YSIYNO00JP0VUDF  (this will dynamic as per diff api call)

//Method we can define as per backend logic

//axios.create file need to check  


//live example --> https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=0YSIYNO00JP0VUDF

const callApi = (endpoint, method = 'GET', data = null) => {

  const BASE_URL = 'https://reqres.in/api/products';
  
  return axios({ 
    //url: `https://reqres.in/api/products/3`,
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
  });
};

export default callApi;