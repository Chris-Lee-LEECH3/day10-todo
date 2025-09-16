import { message } from "antd";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  // baseURL: "https://68c7ac555d8d9f51473285fe.mockapi.io/api/v1/",
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // handle response error
    const { status, data } = error.response;
    if (status === 404) {
      message.error(error.message).then((r) => {});
    }
    return Promise.reject(error);
  }
);

export { api };
