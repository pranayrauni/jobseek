import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        oneJob: null,
        searchJobByText: "",
        allAppliedJobs: [],
        searchedQuery: "",
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setOneJob: (state, action) => {
            state.oneJob = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload
        },
        setSearchQuery: (state, action) => {
            state.searchedQuery = action.payload;
        }
    }
})

export const {setAllJobs, setOneJob, setAllAdminJobs, setSearchJobByText, setAllAppliedJobs, setSearchQuery} = jobSlice.actions;
export default jobSlice.reducer;