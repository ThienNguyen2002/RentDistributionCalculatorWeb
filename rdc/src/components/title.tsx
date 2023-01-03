// A title component that says "Rent Distribution Calculator" and a subtitle that says "Calculate how much each roommate should pay"
import * as React from "react";
import "../styles/Title.css";

const Title: React.FC = () => {
  return (
    <div>
      <h1 className="title">Rent Distribution Calculator</h1>
      <h2 className="subtitle">
        Calculate how much each roommate should pay (Based on Salary)
      </h2>
    </div>
  );
};

export default Title;
