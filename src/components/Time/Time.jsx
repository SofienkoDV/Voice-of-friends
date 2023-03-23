import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import uk from "date-fns/locale/uk";

import "./Time.scss";

function Time({ date }) {
  return (
    <time className="time">
      {formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: uk,
      })}
    </time>
  );
}

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;
