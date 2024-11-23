import { Link, NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

function Navbar() {
  return (
    <header className="container">
      <Link to="/"></Link>

      <nav>
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button className="nav-button">
        <SlMenu />
      </button>
    </header>
  );
}

export default Navbar;
