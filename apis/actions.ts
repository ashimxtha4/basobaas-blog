import { setBlogs } from "../slices/blogSlice";
import { request } from "./request";
import { useAppDispatch } from "../store";

export const getAllBlogs = (dispatch: typeof useAppDispatch) =>
  request
    .getBlogs()
    .then((data) => {
      //TYPE DEFINITION PENDING
      //@ts-ignore
      dispatch(setBlogs(data.data.items));
    })
    .catch((error) => console.log(error))
    .finally(() => {});
