import propTypes from "prop-types";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import "./IconReaded.scss";

function IconReaded({ isMe, isReaded }) {
  return (
    <div className="message__icon-readed">
      {isMe &&
        (isReaded ? (
          <img className="icon-readed" src={readedSvg} alt="Readed icon" />
        ) : (
          <img src={noReadedSvg} alt="No Readed icon" />
        ))}
    </div>
  );
}

IconReaded.propTypes = {
  isMe: propTypes.bool,
  isReaded: propTypes.bool,
};

export default IconReaded;
