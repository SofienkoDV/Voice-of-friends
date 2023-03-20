import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import uk from "date-fns/locale/uk";
import classNames from "classnames";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import "./Message.scss";

function Message({ avatar, user, date, text, isMe, isReaded, attachments }) {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>

      <div className="message__content">
        <div className="message__user">
          <div className="message__info">
            <div className="message__bubble">
              <p className="message__text">{text}</p>
            </div>
            <div className="message__icon-readed">
              <img src={isReaded ? readedSvg : noReadedSvg} alt="Readed icon" />
            </div>
          </div>

          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>

          <time className="message__date">
            {formatDistanceToNow(new Date(date), { locale: uk })}
          </time>
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
};

Message.defaultProps = {
  avatar: "https://i.pravatar.cc/150?img=1",
  user: {
    fullName: "John Doe",
  },
  date: "2020-01-01",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  isMe: false,
  isReaded: false,
};

export default Message;
