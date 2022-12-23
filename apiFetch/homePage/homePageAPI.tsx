import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../../baseConstants";
// GET HOMEPAGE BANNER BLOGS

export const getAll= (path:String) =>{
    return axios
    .get(`${BASE_URL}${path}` as string, { method: "GET" })
    .then((res: AxiosResponse) => res.data)
    .catch((err: AxiosError) => {
      console.log(err);

      if (err.isAxiosError) {
        console.log("Axios Error");
      }
    });
}
