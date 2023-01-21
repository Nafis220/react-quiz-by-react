import React from "react";
import Answers from "./Answers";
import Classes from "./styles/Question.module.css";
export default function Question() {
  return (
    <div className={Classes.question}>
      <div className={Classes.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        Here goes the question from Nafis Being Expert ?
      </div>
      <Answers />
    </div>
  );
}
