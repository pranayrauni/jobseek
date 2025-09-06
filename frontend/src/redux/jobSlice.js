import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        oneJob: null,
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setOneJob: (state, action) => {
            state.oneJob = action.payload;
        }
    }
})

export const {setAllJobs, setOneJob} = jobSlice.actions;
export default jobSlice.reducer;