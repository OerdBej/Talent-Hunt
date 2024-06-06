import React from "react";

const JobsCard = () => {
  //skills array that required
  const skills = ["JavaScript", "React", "NodeJs"];

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
        <div></div>
      </div>
    </div>
  );
};

export default JobsCard;
