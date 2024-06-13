import "./Navbar.scss";
import NavbarLinks from "./navbarLinks/NavbarLinks";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  // console.log("session=", session)
  return (
    <nav className="navbar">
      <NavbarLinks session={session} />
    </nav>
  );
};

export default Navbar;
