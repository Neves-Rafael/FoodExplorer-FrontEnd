import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-backend-mv7f.onrender.com",
  withCredentials : true
});
