import axios from 'axios'
export default axios.create({
    baseURL: "http://www.oasis-planet-server.herokuapp.com/", // the url of our server
    headers: {
      "Content-type": "application/json"
    }
    
  })