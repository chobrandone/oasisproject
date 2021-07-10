 
import http from "../http-common";

class SubscribersDataService {
  getAll() {
    return http.get("/subscribers/view");
  }

  get(id) {
    return http.get(`/subscribers/${id}`);
  }

  create(data) {
    return http.post("/subscribers/create", data);
  }

  update(id, data) {
    return http.put(`/subscribers/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/subscribers/delete/${id}`);
  }
  
  deleteAll() {
    return http.delete(`/subscribers/deleteAll`);
  }

  findByTitle(title) {
    return http.get(`/subscribers?title=${title}`);
  }
}
export default new SubscribersDataService();