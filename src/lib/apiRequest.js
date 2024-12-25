import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://full-stack-estate-api.onrender.com",
  withCredentials: true,
});

export default apiRequest;
