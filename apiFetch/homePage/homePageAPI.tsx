import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../../baseConstants";
// GET HOMEPAGE BANNER BLOGS

const api = axios.create({
  baseURL: BASE_URL,
});
export const getAll = (path: String) => {
  return api
    .get(`${path}` as string)
    .then((res: AxiosResponse) => res.data)
    .catch((err: AxiosError) => {
      console.log(err);

      if (err.isAxiosError) {
        console.log("Axios Error");
      }
    });
};