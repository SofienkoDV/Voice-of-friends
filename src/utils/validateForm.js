export const validateForm = ({ isAuth = false, values, errors }) => {
  const rules = {
    email: [
      {
        test: !values.email,
        message: "Ведіть електронну пошту",
      },
      {
        test: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email),
        message: "Некоректна електронна пошта",
      },
    ],
    username: [
      {
        test: !values.username,
        message: "Потрібно ввести ім'я користувача",
      },
      {
        test: !/^[a-zA-Z][a-zA-Z0-9_]{3,29}$/i.test(values.username),
        message: "Некоректне ім'я користувача",
      },
    ],
    password: [
      {
        test: !values.password,
        message: "Введіть пароль",
      },
      {
        test: !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&/]{8,}$/i.test(
          values.password
        ),
        message: isAuth
          ? "Некоректний пароль"
          : "Пароль повинен містити мінімум 8 символів, включаючи цифри та літери",
      },
    ],
    confirmPassword: [
      {
        test:
          !isAuth &&
          (!values.confirmPassword ||
            values.password !== values.confirmPassword),
        message:
          values.password !== values.confirmPassword
            ? "Паролі не співпадають"
            : "Повторіть пароль",
      },
    ],
  };

  Object.keys(rules).forEach((key) => {
    if (isAuth && key !== "email" && key !== "password") return;

    rules[key].forEach((rule) => {
      if (rule.test) errors[key] = rule.message;
    });
  });

  return errors;
};
