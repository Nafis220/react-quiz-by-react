import React, { useRef, useState } from "react";
import Button from "./Button";
import Classes from "./styles/ProgressBar.module.css";

export default function ProgressBar({ next, prev, progress, submit }) {
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(false);
  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% -65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton} onClick={prev}>
        <span className='material-icons-outlined'> arrow_back </span>
      </div>
      <div className={Classes.rangeArea}>
        <div className={Classes.tooltip} ref={tooltipRef}>
          {progress}% Completed !
        </div>
        <div className={Classes.rangeBody}>
          <div
            className={Classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      <a href='result.html'>
        <Button
          onClick={progress === 100 ? submit : next}
          className={`${Classes.next} `}
        >
          <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
          <span className='material-icons-outlined'> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
}
