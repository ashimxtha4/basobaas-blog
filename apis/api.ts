import axios from "axios";

//BLOG API
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
});

//USED DURING TOKEN AUTHENTICATION
// api.interceptors.request.use(config=>{

//     return config
// })

//PROPERTY API
export const propertyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_PROPERTY_URL,
});
