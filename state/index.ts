import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import blogSlice from "./features/blogSlice";
import categorySlice from "./features/categorySlice";
import videoSlice from "./features/videoSlice";
import premiumPropertySlice from "./features/premiumPropertySlice";
import latestPropertySlice from "./features/latestPropertySlice";

export const store = configureStore({
  reducer: {
    blogData: blogSlice,
    categoryData: categorySlice,
    videoData: videoSlice,
    premiumPropertyData: premiumPropertySlice,
    latestPropertyData: latestPropertySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// For Getting State Values
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
