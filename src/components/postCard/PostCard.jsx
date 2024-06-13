import React from "react";
import "./PostCard.scss";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <section className="post-card-wrapper">
      <figure>
        <Image
          src={"/myPhoto.png"}
          alt="User Photo"
          width={500}
          height={500}
          className="user-photo"
          priority
        />
        <figcaption> {post.createdAt.slice(0, 10)} </figcaption>
      </figure>
      <h3> {post.title} </h3>
      <p> {post.desc} </p>
      <Link href={`/blog/${post.slug}`}> Read More </Link>
    </section>
  );
};

export default PostCard;
