import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          #1 Job Seeking Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          voluptate non ratione accusantium labore.{" "}
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Get your dream job"
            className="outline-none border-none w-full"
          />
          <button className="rounded-r-full bg-[#6A38C2] ">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
