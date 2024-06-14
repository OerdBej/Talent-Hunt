import dayjs from "dayjs";
import React from "react";

const JobsCard = () => {
  //skills array that required
  const skills = ["JavaScript", "React", "NodeJs"];
  const date = dayjs(Date.now());
  const differentDays = date.diff("2024-06-6", "day");

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-100">
        <div>
          <h1>Frontend developer - Apple</h1>
          <p>Full Time - Junior - In-Office</p>
          {/* tags skills map */}
          <div>
            {skills.map((skills) => {
              <p>{skills}</p>;
            })}
          </div>
          `
        </div>
        {/* here the days that posted */}
        <div>
          <p>Posted on {differentDays} </p>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
