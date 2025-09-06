import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setOneJob } from "@/redux/jobSlice";

const JobDescription = () => {

  const params = useParams();
  const jobId = params.id;

  const {oneJob} = useSelector(store => store.job);

  const {user} = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const isApplied = oneJob?.applications?.some(application => application.applicant === user._id) || false;


  useEffect(() => {
    const fetchOneJob = async() => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/${jobId}`, {withCredentials: true})
            if(res.data.success){
                dispatch(setOneJob(res.data.job));
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchOneJob();
  }, [jobId, dispatch, user?._id])

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{oneJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {oneJob?.position} Positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {oneJob?.jobType}
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant="ghost">
              {oneJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Applied" : "Apply now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job description</h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{oneJob?.title}</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">{oneJob?.location}</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{oneJob?.description}</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{oneJob?.experience} years</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{oneJob?.salary} LPA</span></h1>
        <h1 className="font-bold my-1">Total applicants: <span className="pl-4 font-normal text-gray-800">{oneJob?.applications?.length}</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">{oneJob?.createdAt.split("T")[0]}</span></h1>


      </div>
    </div>
  );
};

export default JobDescription;
