import React from "react";
import "./Header.scss";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <h3>
        <Link href={"/"}>  YH - Portfolio </Link>
      </h3>

      <Navbar />
    </header>
  );
};

export default Header;
