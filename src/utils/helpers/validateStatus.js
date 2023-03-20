const validateStatus = (key, touched, errors) => {
  if (touched[key] && errors[key]) {
    return "error";
  } else if (touched[key] && !errors[key]) {
    return "success";
  } else {
    return "";
  }
};

export default validateStatus;
