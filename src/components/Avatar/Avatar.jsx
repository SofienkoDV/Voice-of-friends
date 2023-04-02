import generateAvatarFromHash from "../../utils/helpers/generateAvatarFromHash";

import "./Avatar.scss";

function Avatar(user) {
  if (user.avatar) {
    return user.avatar;
  } else {
    return generateAvatarFromHash(
      Math.floor(Math.random() * 1000000).toString(),
      user.fullname
    );
  }
}

export default Avatar;
