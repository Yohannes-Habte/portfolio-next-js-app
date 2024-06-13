import Image from "next/image";

const PortfolioPage = () => {
  return (
    <main className="experience-page page">
      <section>
        <h1> Portfolio Page</h1>
        <section>
          <article>
            <figure>
              <Image src={"/"} alt="" width={500} height={500} />
              <figcaption></figcaption>
            </figure>
            <aside>
              <h4>Github</h4>
              <a href=""> Live Demo </a>
            </aside>
          </article>

          <article>
            <figure>
              <Image src={"/"} alt="" width={500} height={500} />
              <figcaption>Project Name</figcaption>
            </figure>
            <aside>
              <h4>Github</h4>
              <a href=""> Live Demo </a>
            </aside>
          </article>

          <article>
            <figure>
              <Image src={"/"} alt="" width={500} height={500} />
              <figcaption>Project Name</figcaption>
            </figure>
            <aside>
              <h4>Github</h4>
              <a href=""> Live Demo </a>
            </aside>
          </article>

          <article>
            <figure>
              <Image src={"/"} alt="" width={500} height={500} />
              <figcaption>Project Name</figcaption>
            </figure>
            <aside>
              <h4>Github</h4>
              <a href=""> Live Demo </a>
            </aside>
          </article>

          <article>
            <figure>
              <Image src={"/"} alt="" width={500} height={500} />
              <figcaption>Project Name</figcaption>
            </figure>
            <aside>
              <h4>Github</h4>
              <a href=""> Live Demo </a>
            </aside>
          </article>
        </section>
      </section>
    </main>
  );
};

export default PortfolioPage;
