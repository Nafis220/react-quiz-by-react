import React from "react";
import Classes from "../components/styles/Video.module.css";
export default function Video({ title, id, noq }) {
  return (
    <div className={Classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={Classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points: {noq * 5}</p>
      </div>
    </div>
  );
}
