import React from "react";
import images from "../assets/images/3.jpg";
import Classes from "../components/styles/Video.module.css";
export default function Video() {
  return (
    <div className={Classes.video}>
      <img src={images} alt='' />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={Classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : 10 / 10</p>
      </div>
    </div>
  );
}
