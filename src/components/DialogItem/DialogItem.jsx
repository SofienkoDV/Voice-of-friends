import classNames from "classnames";
import { Time, IconReaded } from "../";
import "./DialogItem.scss";

const getAvatar = (avatar) => {
  if (avatar) {
    return avatar;
  } else {
    return "https://i.pravatar.cc/150?img=1";
  }
};

function DialogItem({ user, message, unreaded }) {
  return (
    <>
      <div
        className={classNames("dialogs__item", {
          "dialogs__item--online": user.isOnline,
        })}
      >
        <div className="dialogs__item-avatar">
          <img src={getAvatar(user.avatar)} alt={user.fullname} />
        </div>

        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <p>{user.fullname}</p>
            <span>
              {/* <Time date="Wed Mar 22 2023 22:19:23 GMT+0200" /> */}
              22:19
            </span>
          </div>
          <div className="dialogs__item-info-bottom">
            <p>{message.text}</p>

            {unreaded > 0 && (
              <div className="dialogs__item-info-bottom-count">
                <span>{unreaded > 9 ? "+9" : unreaded}</span>
              </div>
            )}

            {message.isReaded && <IconReaded isMe={true} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogItem;
