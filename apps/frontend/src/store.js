import { configureStore } from "@reduxjs/toolkit";
import { jobsReducer } from "./slices/jobsSlice";

export default configureStore({
    reducer: {
        jobs: jobsReducer,
    },
});