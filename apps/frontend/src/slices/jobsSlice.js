import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
    name: "jobs",
    initialState: [],
    reducers: {
        addJob: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;