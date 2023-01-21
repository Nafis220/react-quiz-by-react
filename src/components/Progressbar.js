import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Classes from "./styles/ProgressBar.module.css";

export default function ProgressBar() {
  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton}>
        <span className='material-icons-outlined'> arrow_back </span>
      </div>
      <div className={Classes.rangeArea}>
        <div className='tooltip'>24% Cimplete!</div>
        <div className={Classes.rangeBody}>
          <div className={Classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <a href='result.html'>
        <Link to='/result'>
          <Button className={`${Classes.next} `}>
            <span>Next Question</span>
            <span className='material-icons-outlined'> arrow_forward </span>
          </Button>
        </Link>
      </a>
    </div>
  );
}
