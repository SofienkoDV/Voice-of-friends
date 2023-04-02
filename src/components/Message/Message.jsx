import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { convertCurrentTime } from "../../utils/helpers";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";
import waveSvg from "../../assets/img/wave.svg";

import { Time } from "../";

import "./Message.scss";

function AudioMessage({ audio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const audioElem = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioElem.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    });

    audio.addEventListener("timeupdate", () => {
      const duration = (audio.currentTime && audio.duration) || 0;
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / duration) * 100);
    });

    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio.removeEventListener("timeupdate", () => {});
    };
  }, [isPlaying, currentTime, progress]);

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audio} preload="auto" />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
      ></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
}

function Message({
  avatar,
  user,
  date,
  audio,
  text,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1,
        "message--is-audio": audio,
      })}
    >
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>

      <div className="message__content">
        <div className="message__user">
          <div className="message__info">
            {(audio || text || isTyping) && (
              <>
                <div className="message__bubble">
                  {text && <p className="message__text">{text}</p>}
                  {isTyping && (
                    <div className="message__typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )}
                  {audio && <AudioMessage audio={audio} />}
                </div>
                <div className="message__icon-readed">
                  <img
                    src={isReaded ? readedSvg : noReadedSvg}
                    alt="Readed icon"
                  />
                </div>
              </>
            )}
          </div>
          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, index) => (
                <div key={index} className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}

          {date && (
            <time className="message__date">
              <Time date={date} />
            </time>
          )}
        </div>
      </div>
    </div>
  );
}

Message.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string,
  isMe: PropTypes.bool.isRequired,
  isReaded: PropTypes.bool.isRequired,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

Message.defaultProps = {
  avatar: "https://source.unsplash.com/100x100/?user",
  user: {
    fullName: "User",
  },
  date: "Sun Jul 11 2021 15:00:00 GMT+0200 (Central European Summer Time)",
  text: "",
  isMe: false,
  isReaded: false,
  attachments: [],
  isTyping: false,
};

export default Message;
