import LoginForm from "@/components/loginForm/LoginForm";
import "./LoginPage.scss";
import { handleGithubLogin } from "../../../lib/controller/userController";

const LoginPage = () => {
  return (
    <main className="login-page page">
      <section className="login-page-container">
        <h1 className="login-page-title"> Login Page </h1>
        <LoginForm />
        <form action={handleGithubLogin} className="github-login-form">
          <button className="login-github-btn">Login with Github</button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
