import axios from "axios";

export const api = axios.create({
  // baseURL: "https://foodexplorer-backend-mv7f.onrender.com",
  baseURL: "http://localhost:3333",
  withCredentials: true,
});
