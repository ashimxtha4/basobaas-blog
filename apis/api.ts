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
  headers: {
    "content-type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCYXNvYmFhcyBOZXBhbCIsImlhdCI6MTUxNjAyMjk5OSwiZXhwIjoyMTc3NDUyNzk5LCJuYmYiOjE1MTYwMjI5OTksImp0aSI6Ikd1ZXN0VG9rZW4iLCJzdWIiOjB9.jwD5D82zHm_PLb16ehS5cPcZgf8vuAkwNONOHBrYvjc",
  },
});
