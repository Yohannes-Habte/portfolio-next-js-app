import ContactForm from "@/components/contactForm/ContactForm";
import dynamic from "next/dynamic";
import "./ContactPage.scss";
import { Suspense } from "react";
// import HydrationTest from "@/components/hydrationTest"; // Make Hydration test component dynamic
const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
});

export const metadata = {
  title: "Contact Page",
  description: "Form more information, contact me using the form below",
};

const ContactPage = () => {
  // Method One to prevent hydration
  /** 
  "use client";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

   const randomNumber = Math.random();
  console.log(randomNumber);

  */

  // Method Two to prevent hydration
  /** 
  "use client";

   const randomNumber = Math.random();
  console.log(randomNumber);
    <div suppressHydrationWarning> {randomNumber} </div>

  */

  // Method Three to prevent hydration use component as   <HydrationTestNoSSR />

  return (
    <main className="contact-page page">
      <section className="contact-page-container">
        <h1 className="contact-page-title">Contact Me</h1>

        <HydrationTestNoSSR />

        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
