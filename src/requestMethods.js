import axios from "axios";

const BASE_URL = "http://localhost:5050/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmE0YzkzNWFiMGUxMDY1NjBhMzIwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzM2OTkzNiwiZXhwIjoxNjc3NjI5MTM2fQ.s7dNr0hFCCencq7Ru2tbyZ3Bz2zPmews0D1MpKivSYA";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});