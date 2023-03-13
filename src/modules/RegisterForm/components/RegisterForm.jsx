import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Button, Block } from "../../../components";
import { Link } from "react-router-dom";

function RegisterForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="auth__top">
        <h2>Реєстрація</h2>
        <p>Будь ласка, зареєструйтесь в системі</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item name="email">
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Електронна пошта"
              className="login-form__input"
            />
          </Form.Item>

          <Form.Item name="username">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Ім'я користувача"
              className="login-form__input"
            />
          </Form.Item>
          <Form.Item validateStatus="success" hasFeedback name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              className="login-form__input"
            />
          </Form.Item>

          <Form.Item validateStatus="success" hasFeedback name="repeatPassword">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Повторіть пароль"
              className="login-form__input"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Зареєструватися
            </Button>
          </Form.Item>

          <Form.Item>
            <Link className="login-form__register-link" to="/">
              Увійти в обліковий запис
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </>
  );
}

export default RegisterForm;
