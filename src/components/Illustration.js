import React from "react";
import signupImg from "../assets/images/signup.svg";
import Classes from "./styles/Illustration.module.css";
export default function Illustration() {
  return (
    <div className={Classes.illustration}>
      <img src={signupImg} alt='Login' />
    </div>
  );
}
