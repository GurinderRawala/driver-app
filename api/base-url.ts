import axios from "axios";
export const API_SERVICE_URL = "https://f4a0-76-69-107-164.ngrok.io";//"http://10.0.2.2:8081";
export const API_HEADERS = {
    "Accept": '*/*',
    "Cookie": "connect.sid=s%3Az-3Z3ZfNzx23hKnx2SJ3uSWls_nWoT-S.sT41bNu92cJ0rZ9ktDy5e8meGY3DUXmsvjGFI2fbz1A",
    "Content-Type": "application/json",
    "Connection": "keep-alive",
    "X-Request-ID": ""
}

export const api = axios.create({
    baseURL: API_SERVICE_URL,
    headers: API_HEADERS,
});