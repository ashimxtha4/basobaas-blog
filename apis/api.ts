import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
});

//USED DURING TOKEN AUTHENTICATION
// api.interceptors.request.use(config=>{

//     return config
// })
