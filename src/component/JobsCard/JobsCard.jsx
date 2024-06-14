import dayjs from "dayjs";
import React from "react";

const JobsCard = () => {
  //skills array that required
  const skills = ["JavaScript", "React", "NodeJs"];
  const date = dayjs(Date.now());
  const differentDays = date.diff("2024-06-06", "day");

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-100">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">Frontend developer - Apple</h1>
          <p>Full Time - Junior - In-Office</p>
          {/* tags skills map */}
          <div className="flex items-center gap-2">
            {skills.map((skill) => (
              <p className="text-green-500 py-1 px-2 rounded-md border border-black" key={skill}>{skill}</p>
            ))}
          </div>
        </div>
        {/* here the days that posted */}
        <div className="flex items-center">
          <p>Posted on {differentDays} days ago</p>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
