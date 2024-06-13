"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  // Client side Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchedItem = searchParams.get("search");

  const handleClick = () => {
    console.log("Clicked");
    // router.push("/");
    // router.replace("/")
    // router.refresh("")
    // router.back();
    router.forward();
  };

  console.log(searchedItem);
  return (
    <main className="navigation-page page">
      <section>
        <h1> Navigate to</h1>
        <Link href={"/"} prefetch={false}>
          Go to Home Page
        </Link>

        {/* You can use button to navigate to what you want */}

        <div>
          <button onClick={handleClick}>Write and redirect </button>
        </div>
      </section>
    </main>
  );
};

export default NavigationTestPage;
