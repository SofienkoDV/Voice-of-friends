const helpMessage = (key, touched, errors) => {
  if (!touched[key]) {
    return "";
  } else if (errors[key]) {
    return errors[key];
  } else {
    return "";
  }
};

export default helpMessage;
