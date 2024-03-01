import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Classes from "./styles/MiniPlayer.module.css";
export default function MiniPlayer({ title, id }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  function toogleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(Classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(Classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toogleMiniPlayer}
    >
      <span className={`material-icons-outlined  ${Classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined  ${Classes.close}`}
        onClick={toogleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        style={{
          width: "300px",
          objectFit: "cover",
          animation: "miniplayerAnim 0.3s ease forwards",
        }}
        url={videoUrl}
        width='300px'
        height='168px'
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}
