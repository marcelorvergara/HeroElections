import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});

export async function read(url) {
  const { data } = await axiosInstance.get(url);
  return data;
}

export async function readAll() {
  const result = await Promise.allSettled([
    axiosInstance.get("cities"),
    axiosInstance.get("candidates"),
    axiosInstance.get("election"),
  ]);
  return result;
}
