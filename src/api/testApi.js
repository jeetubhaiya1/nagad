//all api call here 

import callApi from "./callApi";

//import callApi from "../utils/callApi";

const testApi = {
  fechAllDetails() {
    return callApi(`3`);
  },
  fechApiDetails() {
    return callApi(`4`);
  },

};

export default testApi; 