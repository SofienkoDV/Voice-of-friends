import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Button, Block } from "../../../components";
import { Link } from "react-router-dom";

function LoginForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
          }}
          onFinish={onFinish}
        >
          <Form.Item name="username">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              className="login-form__input"
            />
          </Form.Item>
          <Form.Item validateStatus="success" hasFeedback name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="login-form__input"
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
