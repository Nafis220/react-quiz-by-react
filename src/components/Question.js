import React from "react";
import Answers from "./Answers";
import Classes from "./styles/Question.module.css";
export default function Question({ answers = [] }) {
  return answers.map((answers, index) => (
    <div className={Classes.question} key={index}>
      <div className={Classes.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        {answers.title}
      </div>
      <Answers input={false} options={answers.options} />
    </div>
  ));
}
