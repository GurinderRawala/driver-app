import axios from "axios";
export const API_SERVICE_URL = "https://375a-76-69-107-164.ngrok.io";//"http://10.0.2.2:8081";
export const API_HEADERS = {
    "Accept": '*/*',
    "Cookie": "connect.sid=s%3ACFck1vTTmHWGQmclVSM7HH3yVTD2ycnq.GRt0TjUAFYVD9yvtP6LuSiraHD%2BMlo8f1nRm2I3b4FI",
    "Content-Type": "application/json",
    "Connection": "keep-alive",
    "X-Request-ID": ""
}

export const api = axios.create({
    baseURL: API_SERVICE_URL,
    headers: API_HEADERS,
});