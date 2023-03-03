import axios from "axios";

const BASE_URL = "http://localhost:5050/api/";
const TOKEN = "yourToken";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});
