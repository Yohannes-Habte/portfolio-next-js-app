"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleLogout } from "../../../lib/controller/userController";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Experience", path: "/experience" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" },
];

const NavbarLinks = ({ session }) => {
  // Path name is used to style for the active path
  const pathName = usePathname();

  return (
    <div className="navbar-items-wrapper">
      <ul className="navbar-items">
        {links.map((link) => {
          return (
            <li
              key={link.title}
              className={
                pathName === link.path
                  ? "active-navbar-item"
                  : "passive-navbar-item"
              }
            >
              <Link href={link.path} className="navbar-item-link">
                {link.title}
              </Link>
            </li>
          );
        })}

        {session?.user?.isAdmin && (
          <li
            className={
              pathName === "/admin"
                ? "active-navbar-item"
                : "passive-navbar-item"
            }
          >
            <Link href={"/admin"} className="navbar-item-link">
              Admin{" "}
            </Link>{" "}
          </li>
        )}
      </ul>

      {session?.user ? (
        <>
          <form action={handleLogout}>
            <button className="navbar-logout-btn">Logout</button>
          </form>
        </>
      ) : (
        <ul className="navbar-account-items">
          <li className="navbar-account-item">
            <Link href={"/login"} className="navbar-item-link">
              Login{" "}
            </Link>{" "}
          </li>
          <li className="navbar-account-item">
            <Link href={"/register"} className="navbar-item-link">
              Sign Up{" "}
            </Link>{" "}
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarLinks;
