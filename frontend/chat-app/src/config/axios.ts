import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { getToken } from "../utils/tokenService";

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (getToken()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => error,
);
