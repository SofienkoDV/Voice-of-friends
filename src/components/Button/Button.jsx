import PropTypes from "prop-types";
import classNames from "classnames";
import { Button as AntButton } from "antd";
import "./Button.scss";

function Button(props) {
  console.log(props);
  return (
    <AntButton
      className={classNames("button", props.className, {
        "button--large": props.size === "large",
      })}
      {...props}
    />
  );
}

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
