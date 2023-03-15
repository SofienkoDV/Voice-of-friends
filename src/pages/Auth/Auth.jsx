import { LoginForm, RegisterForm } from "../../modules";
import { Routes, Route } from "react-router-dom";

import "./Auth.scss";

function Auth() {
  return (
    <section className="auth">
      <div className="auth__content">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </section>
  );
}

export default Auth;
