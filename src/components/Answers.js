import React, { Fragment } from "react";
import CheckBox from "./CheckBox";
import Classes from "./styles/Answers.module.css";

export default function Answers({ input, options = [], handleChange }) {
  return (
    <div className={Classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <CheckBox
              key={index}
              className={Classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <CheckBox
              key={index}
              className={`${Classes.answer} ${
                option.correct
                  ? Classes.correct
                  : option.checked
                  ? Classes.wrong
                  : null
              }`}
              text={option.title}
              value={index}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
