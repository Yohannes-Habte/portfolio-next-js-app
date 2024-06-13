import Image from "next/image";
import "./SinglePostPage.scss";
import axios from "axios";

// Metadata handling in a dynamic way
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return { title: post.title, description: post.desc };
};

// Fetching data using an API
const getData = async (slug) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Delete data using an API
// const deleteData = async (slug) => {
//   try {
//     const { data } = await axios.delete(
//       `http://localhost:3000/api/blog/${slug}`,
//       {
//         cache: "no-store",
//       }
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const SinglePostPage = async ({ params }) => {
  // Server side Navigation
  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  return (
    <main className="single-post-page page">
      <section>
        <h1> {post.title} </h1>
        <article>
          <figure>
            <Image
              src={"/myPhoto.png"}
              alt="User Photo"
              width={600}
              height={400}
              className="user-photo"
              priority
            />
            <figcaption>date 01.09.2024</figcaption>
          </figure>

          <figure>
            <Image
              src={"/myPhoto.png"}
              alt="User Photo"
              width={60}
              height={40}
              className="user-photo"
              priority
            />
            <figcaption>author: Yohannes Habte</figcaption>
          </figure>

          <aside>
            <h4>Published</h4>
            <p>Date 01.01.2014</p>
          </aside>
        </article>

        <p> {post.desc} </p>
      </section>
    </main>
  );
};

export default SinglePostPage;
