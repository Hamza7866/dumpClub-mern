import React from "react";

const StepName = ({ OnNext }) => {
  return (
    <div>
      Name Component
      <button onClick={OnNext}>Next</button>
    </div>
  );
};

export default StepName;
