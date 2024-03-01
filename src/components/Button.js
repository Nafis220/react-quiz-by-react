import React from "react";
import Classes from "./styles/Button.module.css";
export default function Button({ className, children, ...rest }) {
  return (
    <button className={`${Classes.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
