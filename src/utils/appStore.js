import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieSlices from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlices,
  },
});

export default appStore;
