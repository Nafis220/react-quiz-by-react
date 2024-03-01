import React from "react";
import Classes from "./styles/From.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${Classes.form}`} {...rest} action='#'>
      {children}
    </form>
  );
}
