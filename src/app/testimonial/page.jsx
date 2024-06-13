import Image from "next/image";

const TestimonialPage = () => {
  return (
    <main className="experience-page page">
      <section>
        <h1> Testimonial Page</h1>
        <article>
          <h2> Recommendation Writer Name </h2>
          <figure>
            <Image src={"/"} alt="" width={500} height={500} />
            <figcaption>Title of recommendation writer</figcaption>
          </figure>
        </article>
      </section>
    </main>
  );
};

export default TestimonialPage;
