import axios from "axios";

export default {
  searchName: function(term) {
    return axios.get(`/api/items/name/${term}`);
  },
  searchCategory: function(term) {
    return axios.get(`/api/items/category/${term}`);
  },
  searchInfo: function(term) {
    return axios.get(`/api/info/${term}`);
  },
  searchStats: function(term){
    return axios.get(`/api/info/gasRoute/${term}`)
  }
}
