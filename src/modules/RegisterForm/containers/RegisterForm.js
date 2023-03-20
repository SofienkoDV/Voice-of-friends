import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";

export default withFormik({
  mapPropsToValues: () => ({
    email: "s1d2v3@gmail.com",
    username: "s1d2v3",
    password: "D1v2s3v4s2d1",
    confirmPassword: "D1v2s3v4s2d1",
  }),

  validate: (values) => {
    const errors = {};

    console.log("values", values);
    console.log("errors", errors);

    if (!values.email) {
      errors.email = "Ведіть електронну пошту";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Некоректна електронна пошта";
    }

    if (!values.username) {
      errors.username = "Потрібно ввести ім'я користувача";
    } else if (!/^[a-zA-Z0-9]+$/i.test(values.username)) {
      errors.username = "Некоректне ім'я користувача";
    }

    if (!values.password) {
      errors.password = "Потрібно ввести пароль";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
    ) {
      errors.password =
        "Ваш пароль повинен містити принаймні одну літеру та одну цифру і мати довжину не менше 8 символів";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Потрібно підтвердити пароль";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Паролі не співпадають";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(RegisterForm);
