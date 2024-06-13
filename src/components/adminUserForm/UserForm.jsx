"use client";
import { createAccount } from "@/lib/action";
import { useFormState } from "react-dom";

const UserForm = () => {
  const [state, formAction] = useFormState(createAccount, undefined);
  return (
    <form action={formAction}>
      <h1>Add New User</h1>

      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <div>
        <select name="isAdmin">
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>

      <div>
        <button> Sign Up </button>
      </div>
      {state?.error && <p> {state.error} </p>}
    </form>
  );
};

export default UserForm;
