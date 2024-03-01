import React from "react";
import Question from "./Question";
import Classes from "./styles/Analysis.css";
export default function Analysis({ answers }) {
  return (
    <div className={Classes.analysis}>
      <h1>Question Analysis</h1>

      <Question answers={answers} />
    </div>
  );
}
