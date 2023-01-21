import React from "react";
import Classes from "./styles/Button.module.css";
export default function Button({ className, children }) {
  return <div className={`${Classes.button} ${className}`}>{children}</div>;
}
