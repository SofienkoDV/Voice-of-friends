import { orderBy } from "lodash";
import { DialogItem } from "../";

import "./Dialogs.scss";

function Dialogs({ items, userId }) {
  console.log(items);
  return (
    <div className="dialogs">
      {orderBy(items, ["message.created_at"], ["desc"]).map((item) => (
        <DialogItem
          key={item._id}
          user={item.user}
          message={item.message}
          unreaded={item.unreaded}
          isMe={item._id === userId}
        />
      ))}
    </div>
  );
}

export default Dialogs;
