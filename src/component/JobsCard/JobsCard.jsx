import dayjs from "dayjs";
import React from "react";

const JobsCard = () => {
  //skills array that required
  const skills = ["JavaScript", "React", "NodeJs"];
  const date = dayjs(Date.now());
  const differentDays = date.diff("2024-06-6", "day");

  return (
    <div>
      <div>
        <div>
          <h1>Frontend developer - Apple</h1>
          <p>Full Time - Junior - In-Office</p>
          //tags skills map
          <div>
            {skills.map((skills) => {
              <p>{skills}</p>;
            })}
          </div>
          `
        </div>
        //here the days that posted
        <div>
                  <p>Posted on {differentDays} </p>
                  <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
