import React from "react";
import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link href="/" legacyBehavior>
        <a className="navbar-brand">Superhero Identity</a>
      </Link> 
      <Link href="/add" legacyBehavior>
        <MDBBtn>New Indentity</MDBBtn>
      </Link>
    </nav>
  );
};

export default Navbar;
