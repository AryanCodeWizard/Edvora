// src/services/apiConnector.jsx
import axios from "axios";

// Base URL from .env OR fallback to localhost
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/api/v1";

// Axios instance with baseURL
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Universal API Connector
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,
    url,
    data: bodyData ? bodyData : {},   // ✅ Correct field for POST/PUT
    headers: headers ? headers : {},
    params: params ? params : {},
  });
};

