import Image from "next/image";
import React from "react";
import "./page.scss";

const page = () => {
  return (
    <main className="home-page page">
      <section className="home-page-container">
        <h1 className="home-page-title">Home page </h1>
        <article className="home-page-sections-wrapper">
          {/*Profile Section */}
          <section className="user-profile-and-mission section">
            <aside className="user-profile">
              <figure className="image-container">
                <Image
                  src={"/myPhoto.png"}
                  alt="User Photo"
                  width={600}
                  height={400}
                  className="user-photo"
                  priority
                />
                <figcaption>
                  <a href="">Github</a>
                  <a href="">LinkedIn</a>
                  <a href="">WhatsApp</a>
                </figcaption>
              </figure>
              <h3>Yohannes Habtemariam</h3>
            </aside>

            <article>
              <h3> My Mission </h3>
              <p>
                The mission of life is to serve others with love. Service then
                pays off according to what you serve others. That is why I am
                always happy to serve others with all my heart, mind, soul and
                body. Passionate Fullstack Web Developer with 7+ years of
                professional experience in business administration. Equipped
                with strong project management and presentation skills due to
                work in research, consultancy and lecturing. Looking for an
                exciting new challenge to build innovative solutions. Confident
                and look forward to bringing IT and business management together
                for the benefit of stakeholders.
              </p>
            </article>
          </section>

          {/* Web and App Development Section */}
          <section className="web-and-app-development-section section">
            <h3>Web & App Development </h3>
            <article>
              <h3>MERN Stack</h3>
              <figure>
                <Image src={"/myPhoto.png"} alt="" width={500} height={500} />
                <figcaption>
                  <span>MongoDB</span>
                  <span>Express.JS</span>
                  <span>React.Js</span>
                  <span>Node.Js</span>
                  <span>Next.Js</span>
                </figcaption>
              </figure>
            </article>

            <article>
              <h3> Additional Stack </h3>
              <figure>
                <Image src={"/myPhoto.png"} alt="" width={500} height={500} />
                <figcaption>
                  <span>Vanella.js</span>
                  <span>PHP</span>
                  <span>mySQL</span>
                  <span>XAMP</span>
                  <span>React Native</span>
                </figcaption>
              </figure>
            </article>
          </section>
          {/* Business Administration Section */}
          <section className="business-administration-mission section">
            <h3> Business Administration </h3>

            <article>
              <h3> Business Consultant </h3>
              <figure>
                <Image src={"/myPhoto.png"} alt="" width={500} height={500} />
                <figcaption>
                  <span>Strategic Plan Development</span>
                  <span>Business Research</span>
                  <span>Project Management</span>
                  <span>Personal Development</span>
                </figcaption>
              </figure>
            </article>

            <article>
              <h3> Lecturing </h3>
              <figure>
                <Image src={"/myPhoto.png"} alt="" width={500} height={500} />
                <figcaption>
                  <span>Postgraduate & Undergraduate Lecturer</span>
                  <span>Research Supervisor</span>
                  <span>Workshop Facilitator</span>
                  <span>Invigilator</span>
                </figcaption>
              </figure>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
};

export default page;
