import { withFormik } from "formik";
import { validateForm } from "../../../utils/validateForm";
import RegisterForm from "../components/RegisterForm";

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  }),

  validate: (values) => {
    const errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(RegisterForm);
