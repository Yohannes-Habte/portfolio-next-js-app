"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import "./.RegisterForm.scss";
import { createAccount } from "../../lib/controller/userController.js";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const RegisterForm = () => {
  const [state, formAction] = useFormState(createAccount, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="sign-up-form">
      <div className="input-container">
        <span>
          <FaUser className="icon" />
        </span>
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
        <span>
          <MdEmail className="icon" />
        </span>
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
        <span>
          <RiLockPasswordFill className="icon" />
        </span>
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

      <button className="register-form-btn"> Sign Up </button>

      {state?.error && <p> {state.error} </p>}

      <Link href={"/login"}>
        Have an account? <b> Login </b>{" "}
      </Link>
    </form>
  );
};

export default RegisterForm;
