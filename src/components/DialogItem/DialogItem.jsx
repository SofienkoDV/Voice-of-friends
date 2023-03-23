import classNames from "classnames";
import { format } from "date-fns";
import { IconReaded } from "../";
import "./DialogItem.scss";

const getFormatDate = (date) => {
  if (
    format(new Date(date), "dd.MM.yyyy") === format(new Date(), "dd.MM.yyyy")
  ) {
    return format(new Date(date), "HH:mm");
  } else {
    return format(new Date(date), "dd.MM.yyyy");
  }
};

const getAvatar = (avatar) => {
  if (avatar) {
    return avatar;
  } else {
    return "https://i.pravatar.cc/150?img=1";
  }
};

function DialogItem({ user, message, unreaded, isMe }) {
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
            <span>{getFormatDate(message.created_at)}</span>
          </div>
          <div className="dialogs__item-info-bottom">
            <p>{message.text}</p>

            {unreaded > 0 && (
              <div className="dialogs__item-info-bottom-count">
                <span>{unreaded > 9 ? "+9" : unreaded}</span>
              </div>
            )}

            {isMe && <IconReaded isMe={isMe} isReaded={message.isReaded} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogItem;
