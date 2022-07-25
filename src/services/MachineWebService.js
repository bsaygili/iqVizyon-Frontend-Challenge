import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // axios get request project gitlab files (dont forget)
  getMachines() {
    return apiClient.get(`/machines`);
  },
  getMachine(id) {
    return apiClient.get(`/machines/${id}`);
  },
};
