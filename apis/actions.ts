import { setBlogs } from "../slices/blogSlice";
import { request } from "./request";
import { useAppDispatch } from "../store";
import { setVideo } from "../slices/videoSlice";

//BLOGS
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

//CATEGORIES
export const getAllCategory = async (dispatch: typeof useAppDispatch) => {
  try {
    const res = await request.getCategory();
    if (res.data.items) {
      //@ts-ignore
      dispatch(setCategory(res.data.items));
    }
  } catch (e) {
    console.log(e);
  }
};

//VIDEOS
export const getAllVideo = async (dispatch: typeof useAppDispatch) => {
  try {
    const res = await request.getCategory();
    if (res.data.items) {
      //@ts-ignore
      dispatch(setVideo(res.data.items));
    }
  } catch (error) {
    console.log(error);
  }
};
