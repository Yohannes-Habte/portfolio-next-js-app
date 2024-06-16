import Image from "next/image";
import "./page.scss";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXingSquare } from "react-icons/fa";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";

const page = () => {
  // Animation using iTyped
 // const careerRef = useRef();

  // useEffect(() => {
  //   init(careerRef.current, {
  //     showCursor: true,
  //     backDelay: 2000,
  //     backSpeed: 50,
  //     strings: [
  //       "MongoDB",
  //       "Express",
  //       "React",
  //       "Next.js",
  //       "Redu",
  //       "Node.js",
  //       "Linus",
  //       "Apache",
  //       "MySQL",
  //       "PHP",
  //       "Project Manager",
  //       "Strategic Planner",
  //       "Researcher",
  //       "Lecturer",
  //     ],
  //   });
  // }, []);

  return (
    <main className="home-page page">
      <section className="home-page-container">
        {/* User Profile Section */}
        <section className="user-profile">
          <article className="my-profile">
            <figure className="image-container">
              <Image
                src={"/myPhoto.png"}
                alt="User Photo"
                width={150}
                height={200}
                className="image"
                priority
              />
              <figcaption className="figcaption">
                <Link href="https://github.com/Yohannes-Habte">
                  <FaGithubSquare className="icon" />
                </Link>

                <Link href="https://www.linkedin.com/in/yohannes-habtemariam/">
                  <FaLinkedin className="icon" />
                </Link>

                <Link href="https://www.xing.com/profile/Yohannes_Habtemariam4">
                  <FaXingSquare className="icon" />
                </Link>
              </figcaption>
            </figure>
            <aside className="username-profession">
              <h2>Yohannes Habtemariam</h2>

              <h4>Full Stack Developer</h4>
              <h4> Business Administrator </h4>

              <>
                {" "}
                {/* <span ref={careerRef}></span>{" "} */}
              </>
            </aside>
          </article>

          <aside className="download-cv-chat">
            <h3 className="cv-download"> Download CV</h3>
            <Link className="chat" href={"/contact"}>
              {" Let's Talk "}{" "}
            </Link>
          </aside>
        </section>

        {/* Career Profile Section */}

        <section className="career-profile">
          <h3 className="career-title">Web & App Development </h3>
          <article className="career-details">
            <h3 className="career-details-title">MERN Stack</h3>
            <figure className="image-container">
              <Image
                src={"/MERN-stack.png"}
                alt=""
                width={410}
                height={200}
                className="image"
              />
              <figcaption className="figcaption-career">
                <span>MongoDB</span>
                <span>Express.JS</span>
                <span>React.Js</span>
                <span>Node.Js</span>
              </figcaption>
            </figure>
          </article>
        </section>

        <section className="career-profile">
          <h3 className="career-title">Web & App Development </h3>
          <article className="career-details">
            <h3 className="career-details-title">LAMP Stack</h3>
            <figure className="image-container">
              <Image
                src={"/LAMP-stack.jpg"}
                alt=""
                width={410}
                height={200}
                className="image"
              />
                 <figcaption className="figcaption-career">
                <span>L - Linus</span>
                <span>A - Apache</span>
                <span>M - MySQL</span>
                <span>P - PHP</span>
              </figcaption>
            </figure>
          </article>
        </section>

        <section className="career-profile">
          <h3 className="career-title">Web & App Development </h3>
          <article className="career-details">
            <h3 className="career-details-title">Additional Stack</h3>
            <figure className="image-container">
              <Image
                src={"/additional-stack.png"}
                alt=""
                width={350}
                height={300}
                className="image"
              />
            </figure>
          </article>
        </section>

        <section className="career-profile">
          <h3 className="career-title">Business Administration </h3>
          <article className="career-details">
            <h3 className="career-details-title"> Business Consultant </h3>
            <figure className="image-container">
              <Image
                src={"/business-consultant.jpg"}
                alt=""
                width={350}
                height={150}
                className="image"
              />
              <figcaption className="figcaption">
                <span>Strategic Plan Development</span>
                <span>Leadership</span>
                <span>Project Management</span>
                <span>Personal Development</span>
              </figcaption>
            </figure>
          </article>
        </section>

        <section className="career-profile">
          <h3 className="career-title">Business Administration </h3>
          <article className="career-details">
            <h3 className="career-details-title"> Research and Lecturing </h3>
            <figure className="image-container">
              <Image
                src={"/myPhoto.png"}
                alt=""
                width={150}
                height={200}
                className="image"
              />

              <figcaption className="figcaption">
                <span>Postgraduate & Undergraduate Lecturer</span>
                <span>Research Supervisor</span>
                <span>Workshop Facilitator</span>
                <span>Business Research</span>
              </figcaption>
            </figure>
          </article>
        </section>
      </section>
    </main>
  );
};

export default page;
