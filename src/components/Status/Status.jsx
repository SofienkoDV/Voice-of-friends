import PropTypes from "prop-types";
import classNames from "classnames";

import "./Status.scss";

function Status({ isOnline }) {
  return (
    <span className={classNames("status", { "status--online": isOnline })}>
      {isOnline ? "В мережі" : "Не в мережі"}
    </span>
  );
}

Status.propTypes = {
  isOnline: PropTypes.bool,
};

export default Status;
