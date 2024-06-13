import PostCard from "@/components/postCard/PostCard";
import axios from "axios";

// Fetching data using an API
const getData = async () => {
  try {
    const {data} = await axios.get("http://localhost:3000/api/blog", {
      cache: "no-store",
    });


    return data;
  } catch (error) {
    console.log(error);
  }
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <main className="blog-page page">
      <section>
        {posts &&
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
      </section>
    </main>
  );
};

export default BlogPage;
