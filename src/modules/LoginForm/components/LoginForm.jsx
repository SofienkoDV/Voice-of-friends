import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Button, Block } from "../../../components";
import { Link } from "react-router-dom";
import { validateStatus, helpMessage } from "../../../utils/helpers";

function LoginForm(props) {
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
        <h2>Увійти</h2>
        <p>Будь ласка, увійдіть в свій обліковий запис</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
            email: values.email,
            password: values.password,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            validateStatus={validateStatus("email", touched, errors)}
            help={helpMessage("email", touched, errors)}
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
            validateStatus={validateStatus("password", touched, errors)}
            help={helpMessage("password", touched, errors)}
            hasFeedback
            name="password"
          >
            <Input
              id="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              className="login-form__input"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Увійти в обліковий запис
            </Button>
          </Form.Item>

          <Form.Item>
            <Link className="login-form__register-link" to="/register">
              Створити обліковий запис
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </>
  );
}

export default LoginForm;
