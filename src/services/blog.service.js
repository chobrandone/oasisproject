// import axios from 'axios'
// const baseURL = "https://oasis-planet-server.herokuapp.com/"; // the url of our server

// export default {
//   getPostData() {
//       try {
//         return axios.get(`${baseURL}/api/post/view`)
//         .then(res => {
//         return res.data;
//         })
//     } catch (error) {
//         return error.message;
//     }
//   }
// };

import http from "../http-common";

class PostDataService {
  getAll() {
    return http.get("/post/view");
  }

  get(id) {
    return http.get(`/post/${id}`);
  }

  create(data) {
    return http.post("/post/create", data);
  }

  update(id, data) {
    return http.put(`/post/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/post/delete/${id}`);
  }
  
  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new PostDataService();