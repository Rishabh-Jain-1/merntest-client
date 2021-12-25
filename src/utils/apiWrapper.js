import axios from "axios";
const BACKEND_URL = "http://localhost:3006/api/";

export const getDataAPI = async (url) => {
  const res = await axios.get(`${BACKEND_URL}${url}`, {
    headers: { Authorization: localStorage.getItem("token") },
  });
  return res;
};

export const postDataAPI = async (url, post) => {
  const res = await axios.post(`${BACKEND_URL}${url}`, post, {
    headers: { Authorization: localStorage.getItem("token") },
  });
  return res;
};
