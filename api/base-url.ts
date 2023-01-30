import axios from "axios";
export const API_SERVICE_URL = "https://24b0-76-69-107-164.ngrok.io";//"http://10.0.2.2:8081";
export const API_HEADERS = {
    "Accept": '*/*',
    "Cookie": "connect.sid=s%3ACmkYz6tQZSu_bGhtAx8_n54Jq0oO1P4U.gObUcWe3eiuMUGxdwriIjpXN8hjP3zZX3RnDkF6qB3g",
    "Content-Type": "application/json",
    "Connection": "keep-alive",
    "X-Request-ID": ""
}

export const api = axios.create({
    baseURL: API_SERVICE_URL,
    headers: API_HEADERS,
});