import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { Button, Block } from "../../../components";

function RegisterForm(props) {
  const success = false;
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    // isSubmitting,
    // isValid,
  } = props;

  return (
    <>
      <div className="auth__top">
        <h2>Реєстрація</h2>
        <p>Будь ласка, зареєструйтесь в системі</p>
      </div>
      <Block>
        {!success ? (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
              email: values.email,
              username: values.username,
              password: values.password,
              confirmPassword: values.confirmPassword,
            }}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="email"
              validateStatus={
                !touched.email ? "" : errors.email ? "error" : "success"
              }
              help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Електронна пошта"
                className="login-form__input"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item
              name="username"
              validateStatus={
                !touched.username ? "" : errors.username ? "error" : "success"
              }
              help={!touched.username ? "" : errors.username}
              hasFeedback
            >
              <Input
                id="username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ім'я користувача"
                className="login-form__input"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={
                !touched.password ? "" : errors.password ? "error" : "success"
              }
              help={!touched.password ? "" : errors.password}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                id="password"
                type="password"
                placeholder="Пароль"
                className="login-form__input"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              validateStatus={
                !touched.confirmPassword
                  ? ""
                  : errors.confirmPassword
                  ? "error"
                  : "success"
              }
              help={!touched.confirmPassword ? "" : errors.confirmPassword}
              hasFeedback
            >
              <Input
                id="confirmPassword"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Підтвердіть пароль"
                className="login-form__input"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Зареєструватися
              </Button>
            </Form.Item>

            <Form.Item>
              <Link className="login-form__register-link" to="/login">
                Увійти в обліковий запис
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h2>Перевірте свою пошту</h2>
            <p>
              На вашу пошту надіслано листа з посиланням на підтвердження
              облікового запису.
            </p>
          </div>
        )}
      </Block>
    </>
  );
}

export default RegisterForm;
