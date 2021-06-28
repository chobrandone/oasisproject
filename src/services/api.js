import axios from 'axios'
export default() => {
  return axios.create({
    baseURL: `http://www.oasis-planet-server.herokuapp.com/` // the url of our server
  })
}