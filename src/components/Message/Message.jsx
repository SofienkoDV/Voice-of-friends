import PropTypes from "prop-types";
import classNames from "classnames";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import { Time, IconReaded } from "../";

import "./Message.scss";

function Message({
  avatar,
  user,
  date,
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
      })}
    >
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>

      <div className="message__content">
        <div className="message__user">
          <div className="message__info">
            {(text || isTyping) && (
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

          <div className="message__attachments">
            {attachments &&
              attachments.map((item, index) => (
                <div key={index} className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>

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
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

Message.defaultProps = {
  avatar: "https://i.pravatar.cc/150?img=1",
  user: {
    fullName: "John Doe",
  },
  date: "",
  text: "",
  isMe: false,
  isReaded: false,
};

export default Message;
