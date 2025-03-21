import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "x-cg-demo-api-key": "CG-2kFzFsWzuzJQMptUeZoA6L1V",
  },
});

api.interceptors.response.use(res => {
  return res.data;
});

export default api;
