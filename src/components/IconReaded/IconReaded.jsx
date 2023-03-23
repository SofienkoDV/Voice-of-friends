import propTypes from "prop-types";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import "./IconReaded.scss";

function IconReaded({ isReaded }) {
  return (
    <>
      <div className="message__icon-readed">
        <img src={isReaded ? readedSvg : noReadedSvg} alt="Readed icon" />
      </div>
    </>
  );
}

IconReaded.propTypes = {
  isReaded: propTypes.bool,
};

export default IconReaded;
