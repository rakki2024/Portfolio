import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <li>
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
