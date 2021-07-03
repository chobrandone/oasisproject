// import axios from 'axios'
// const baseURL = "https://oasis-planet-server.herokuapp.com/"; // the url of our server

// export default {
//   getPageData() {
//     return axios.post(`${baseURL}/api/contact/create`).then(res => {
//       return res;
//     })
//   }
//   };

  
import http from "../http-common";

class ContactDataService {
  getAll() {
    return http.get("/contact/view");
  }

  get(id) {
    return http.get(`/contact/${id}`);
  }

  create(data) {
    return http.post("/contact/create", data);
  }

  update(id, data) {
    return http.put(`/contact/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/contact/delete/${id}`);
  }
  
  deleteAll() {
    return http.delete(`/contact/deleteAll`);
  }

  findByTitle(title) {
    return http.get(`/contact?title=${title}`);
  }
}
export default new ContactDataService();