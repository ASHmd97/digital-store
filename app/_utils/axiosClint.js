import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const baseUrl = "http://localhost:1337/api";

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default axiosClient;
