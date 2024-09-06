import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import "./header.scss";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ text, link }) => {
  return (
    <li>
      <a className="heading-h5 semibold" href={link}>
        {text}
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <NavLink text="About Me" link="#about-me" />
          <NavLink text="Dev Skills" link="#dev-skills" />
          <NavLink text="Soft Skills" link="#soft-skills" />
          <NavLink text="Projets" link="#projects" />
          <NavLink text="Contact" link="#contact" />
        </ul>
      </nav>
      <button className="burger-menu">
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
      <button className="cv-link button-text semibold">
        Mon CV
        <FontAwesomeIcon icon={faFilePdf} />
      </button>
    </header>
  );
};

export default Header;
