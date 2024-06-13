import { addUser, deleteUserAccount, addPost } from "@/lib/action";
import React from "react";

const ServerTestPage = () => {
  return (
    <main className="server-page">
      <section className="server-page-container, page">
        <h1> How to Create Account </h1>
        <form action={addUser}>
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
            <input type="checkbox" name="agree" />
            <label htmlFor="agree">I agree with the terms and conditions</label>
          </div>

          <button>Submit</button>
        </form>

        <h1> How to Delete</h1>
        <form action={deleteUserAccount}>
          <div>
            <label htmlFor="id">Delete Account </label>
            <input type="text" name="id" id="id" />
          </div>

          <button>Submit</button>
        </form>

        <h1> How to Post A Blog</h1>
       
      </section>
    </main>
  );
};

export default ServerTestPage;
