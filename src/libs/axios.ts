import axios from "axios";

const DATABASE_URL = import.meta.env.DATABASE_URL;

export const axiosInstance = axios.create({baseURL: DATABASE_URL });