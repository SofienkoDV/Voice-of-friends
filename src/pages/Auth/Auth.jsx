import { LoginForm } from "../../modules";

import "./Auth.scss";

function Auth() {
  return (
    <section className="auth">
      <div className="auth__content">
        <LoginForm />
      </div>
    </section>
  );
}

export default Auth;
