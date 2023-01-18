import { setBlogs } from "../features/blogSlice";
import { request } from "../../apis/request";
import { useAppDispatch } from "..";
// import { setVideo } from "../slices/videoSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
// export const getAllVideo = async (dispatch: typeof useAppDispatch) => {
//   try {
//     const res = await request.getCategory();
//     if (res.data.items) {
//       //@ts-ignore
//       dispatch(setVideo(res.data.items));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
type VideoRespponseType={
  _id:string,
  thumbnail:string,
  title:string
}
export const fetchVideos = createAsyncThunk<VideoRespponseType[]>("get/videos", async () => {
  const response = await request.getVideos();
  console.log(response);
  return response.data.items;
});
