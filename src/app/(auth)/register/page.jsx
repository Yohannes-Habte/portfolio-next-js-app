import RegisterForm from "@/components/registerForm/RegisterForm";
import "./RegisterPage.scss";

const RegisterPage = () => {
  return (
    <main className="register-page page">
      <section className="register-page-container">
        <h1 className="register-page-title"> Sign Up Page </h1>
        <RegisterForm />
      </section>
    </main>
  );
};

export default RegisterPage;
