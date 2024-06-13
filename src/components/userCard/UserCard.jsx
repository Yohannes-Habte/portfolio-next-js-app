import Image from "next/image";
import Link from "next/link";

const UserCard = ({ user }) => {
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
        {/* <figcaption> {user.createdAt} </figcaption> */}
      </figure>
      <h3> {user.username} </h3>
      <p> {user.email} </p>
      <Link href={`/admin/${user._id}`}> Read More </Link>
    </section>
  );
};

export default UserCard;
