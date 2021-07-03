import axios from "axios";

export default axios.create({
  baseURL: "https://oasis-planet-server.herokuapp.com/api", // the url of our server
  headers: {
    "Content-type": "application/json"
  }
});

// import axios from 'axios'
// const baseURL = "https://oasis-planet-server.herokuapp.com/"; // the url of our server

// export default {
//   getPageData() {
//     return axios.post(`${baseURL}/api/contact/create`).then(res => {
//       return res;
//     })
//   }
//   };