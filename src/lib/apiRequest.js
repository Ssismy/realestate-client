import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://full-stack-estate-api.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
