import React from "react";
import CheckBox from "./CheckBox";
import Classes from "./styles/Answers.module.css";

export default function Answers() {
  return (
    <div className={Classes.answers}>
      <CheckBox className={Classes.answer} text='Text Answer' />
    </div>
  );
}
