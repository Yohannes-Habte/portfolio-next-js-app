import Image from "next/image";
import "./AboutPage.scss";
import { GrProjects } from "react-icons/gr";
import { MdOutlineSupport } from "react-icons/md";
import { GiFireworkRocket } from "react-icons/gi";

export const metadata = {
  title: "About Page",
  description: "About page description",
};

const AboutPage = () => {
  return (
    <main className="about-page page">
      <section className="about-page-container">
        <h1 className="about-page-container-title">About Me</h1>

        <div className="personal-strategic-intent-and-bulb">
          <section className="personal-strategic-intent">
            <h3 className="my-mission">My Mission</h3>
            <p className="mission">
              My mission is to develop business critical software that meets the
              needs of the customers. Moreover, to serve as a leader by
              encouraging innovative ideas and forward-thinking so that my team
              can create technology solutions that will improve the lives of
              others.
            </p>
            <article className="core-values-wrapper">
              <h3 className="my-values">My Values</h3>
              <p className="value">
                <strong> Growth:</strong> I am lifelong learner to acquire
                knowledge and skills to create a better version of tomorrow. I
                embrace challenges as opportunities to learn, seek feedback for
                improvement, and engage in diverse learning opportunities—formal
                or informal. Read broadly, ask questions, and maintain an
                attitude of intellectual humility.
              </p>
              <p className="value">
                <strong>Integrity:</strong> to uphold honesty, truthfulness, and
                consistency in words and actions.
              </p>

              <p className="value">
                <strong>Cooperation:</strong> Working effectively with others
                towards shared goals, demonstrating a willingness to compromise,
                and valuing the perspectives and expertise of others.
              </p>

              <p className="value">
                <strong>Teamwork:</strong> Teamwork is to apply the principle of
                synergy through treating others with dignity and understanding,
                regardless of their background or beliefs. Every individual
                person is unique and matters a lot to bring change and give
                light in the dark.
              </p>
              <p className="value">
                <strong>Communication: </strong> I will listen to understand
                others before I talk.
              </p>
            </article>
          </section>

          <figure className="bulb-image-container">
            <Image
              src={"/hero.gif"}
              alt="User Photo"
              width={500}
              height={500}
              unoptimized
              className="bulb-image"
            />
          </figure>
        </div>

        <div className="experience-projects-social-services-wrapper">
          <article className="box-wrapper">
            <aside className="summary">
              <GrProjects className="about-icon" />
              <h3 className="title">Experience </h3>
              <p className="year"> 7+ Years Working</p>
            </aside>
            <p className="explanation">
              More than seven years of professional experience in business
              management. Equipped with strong project management and
              presentation skills due to working in research, consulting and
              teaching.
            </p>
          </article>

          <article className="box-wrapper">
            <aside className="summary">
              <GrProjects className="about-icon" />
              <h3 className="title">Projects </h3>
              <p className="year"> 20+ Completed</p>
            </aside>
            <p className="explanation">
              20 web development projects have already been completed. The
              projects are mainly focused on e-commerce websites, such as online
              shopping and stock market consulting. There are also some projects
              that are social-service oriented websites.
            </p>
          </article>

          <article className="box-wrapper">
            <aside className="summary">
              <GiFireworkRocket className="about-icon" />
              <h3 className="title">Social Services </h3>
              <p className="year"> for disadvantaged groups</p>
            </aside>
            <p className="explanation">
              15+ years of social service experience in youth coordination and
              development, and disadvantaged groups. Writing a book about
              success is a matter of personal choice with the intention of
              making disadvantaged people successful.{" "}
            </p>
          </article>
        </div>

        {/* Testimonial Section */}
        <section className="recommendation-letters-wrapper">
          <h2 className="recommendation-letters-title">
            Recommendation Letters
          </h2>

          <figure>
            <Image
              src={"/additional-stack.png"}
              alt=""
              width={1000}
              height={500}
            />
            <figcaption>Title of recommendation writer</figcaption>
          </figure>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
