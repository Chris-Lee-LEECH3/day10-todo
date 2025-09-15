import axios from "axios";

const api = axios.create({
  baseURL: "https://68c7ac555d8d9f51473285fe.mockapi.io/api/v1/",
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,
});

export default api;