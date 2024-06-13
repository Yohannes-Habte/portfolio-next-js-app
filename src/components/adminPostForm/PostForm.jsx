"use client";
import { addPost } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const PostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>

      <div>
        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" id="desc" />
      </div>

      <div>
        <label htmlFor="userId">User Id</label>
        <input type="text" name="userId" id="userId" />
      </div>

      <div>
        <label htmlFor="userId">Slug</label>
        <input type="text" name="slug" id="slug" />
      </div>

      <button>Add Post</button>
      {state?.error && <p> {state.error} </p>}
    </form>
  );
};

export default PostForm;
