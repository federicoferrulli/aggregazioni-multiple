import axios from 'axios';
console.log(import.meta.env.APIURL)
const apiClient = axios.create({
  baseURL: import.meta.env.APIURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;