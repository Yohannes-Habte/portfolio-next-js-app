import Image from "next/image";
import "./AboutPage.scss";

export const metadata = {
  title: "About Page",
  description: "About page description",
};

const AboutPage = () => {
  return (
    <main className="about-page page">
      <section className="about-page-container">
        <h1>About Me</h1>
        <figure className="about-page-image-container">
          <Image
            src={"/hero.gif"}
            alt="User Photo"
            width={500}
            height={500}
            unoptimized
            className="user-image"
          />

          <Image
            src={
              "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg"
            }
            alt="User Photo"
            width={500}
            height={500}
            className="user-image"
          />
        </figure>
        <article>
          <aside>
            <h3>Experience </h3>
            <p> 7+ Years Working</p>
          </aside>
          <p>
            More than seven years of professional experience in business
            management. Equipped with strong project management and presentation
            skills due to working in research, consulting and teaching.
          </p>
        </article>

        <article>
          <aside>
            <h3>Projects </h3>
            <p> 20+ Completed</p>
          </aside>
          <p>
            20 web development projects have already been completed. The
            projects are mainly focused on e-commerce websites, such as online
            shopping and stock market consulting. There are also some projects
            that are social-service oriented websites.
          </p>
        </article>

        <article>
          <aside>
            <h3>Social Services </h3>
            <p> for disadvantaged groups</p>
          </aside>
          <p>
            15+ years of social service experience in youth coordination and
            development, and disadvantaged groups. Writing a book about success
            is a matter of personal choice with the intention of making
            disadvantaged people successful.{" "}
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
