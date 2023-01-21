import React from "react";
import Classes from "./styles/InputText.module.css";

export default function InputText({ icon, ...rest }) {
  return (
    <div className={Classes.textInput}>
      <input {...rest} />
      <span className='material-icons-outlined'> {icon} </span>
    </div>
  );
}
