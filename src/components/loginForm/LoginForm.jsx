"use client";
import "./LoginForm.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { loginUser } from "../../lib/controller/userController";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginUser, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form action={formAction} className="login-form">
      {/* Username */}
      <div className="input-container">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="input-field"
        />

        <label htmlFor="frontendSkills" className="input-label">
          Username
        </label>
        <span className="input-highlight"></span>
      </div>

      {/* Email */}
      <div className="input-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="input-field"
        />

        <label htmlFor="frontendSkills" className="input-label">
          Email
        </label>
        <span className="input-highlight"></span>
      </div>

      {/* Password */}
      <div className="input-container">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input-field"
        />

        <label htmlFor="frontendSkills" className="input-label">
          Password
        </label>
        <span className="input-highlight"></span>
      </div>

      <button className="login-form-btn"> Login </button>

      {state?.error && <p> {state.error} </p>}

      <Link href={"/register"}>
        {"Don't have an account?"} <b> Sign Up </b>{" "}
      </Link>
    </form>
  );
};

export default LoginForm;
