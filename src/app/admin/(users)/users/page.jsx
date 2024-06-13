"use server";

import React from "react";
import axios from "axios";
import UserCard from "@/components/userCard/UserCard";
import { deleteUserAccount } from "@/lib/action";

const getData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/admin", {
      cache: "no-store",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const ProductsPage = async () => {
  const users = await getData();
  return (
    <article>
      {users &&
        users.map((user) => {
          return (
            <div key={user._id}>
              <UserCard user={user} />

              <form action={deleteUserAccount}>
                <input type="hidden" name="id" value={user._id} />
                <button>Delete</button>
              </form>
            </div>
          );
        })}
    </article>
  );
};

export default ProductsPage;
