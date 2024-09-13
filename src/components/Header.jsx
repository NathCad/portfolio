import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Pdf from "../assets/Nathalie_Cadet_CV_Dev.pdf";
import { useEffect, useRef, useState } from "react";

const Logo = () => {
  return (
    <div className="logo heading-h5 bold">
      <svg
        width="23.287"
        height="32.604"
        fill="none"
        version="1.1"
        viewBox="0 0 23.287 32.604"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(11.735 28.029)" fill="#000">
          <path d="m11.552-16.453c0 4.6701-2.7671 8.6964-6.7501 10.523 1.6819-1.3855 2.7529-3.4871 2.7529-5.8391 0-4.1318-3.3063-7.4918-7.4202-7.5755-0.0546-0.0038-0.1045-0.0038-0.1591-0.0038s-0.1044 0-0.159 0.0038c0.23402 3.6504-2.9011 6.9209-3.1984 6.0873l-1.0193-2.8576c-0.80521-2.2574-0.7749 8.1082-2.258 5.9421-2.8588-4.1752 0.23495 4.0839-2.1618 4.0839-4.275-5.408-1.8533-6.9096-2.7799-10.364-0.82803-3.0871 2.4768-2.889 1.9955-6.8995 2.1008-3.5662 6.1762-4.4454 9.5809-4.677 4.0766 2.9653 5.9514-2.1789 8.1854 3.3911 1.8774 0.2221 3.3911 4.9892 3.3911 8.1855z" />
          <path d="m-11.636 3.4337c-0.63404-1.8214 4.5089-2.1953 5.1346-3.333 0.62574-1.1377 1.6308 3.1803 4.2095 4.0958-0.59266 0.20441-8.7101 1.0587-9.3442-0.76278z" />
          <path d="m0 4.2289s2.7305-1.1946 3.3562-3.6407c0.62574-2.4461 6.2005 3.5269 6.2005 3.5269-1.6781 0.35079-4.9839 0.74382-9.5568 0.11377z" />
        </g>
      </svg>
      Nathalie Cadet
    </div>
  );
};

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
  const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  const refNav = useRef(null);
  const refBouton = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (
        refNav.current?.contains(event.target) ||
        refBouton.current?.contains(event.target)
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  return (
    <header>
      <Logo />
      <nav ref={refNav} className={open ? "open" : ""} onClick={closeMenu}>
        <ul>
          <NavLink text="About Me" link="#about-me" />
          <NavLink text="Dev Skills" link="#dev-skills" />
          <NavLink text="Soft Skills" link="#soft-skills" />
          <NavLink text="Projets" link="#projects" />
          <NavLink text="Contact" link="#contact" />
        </ul>
      </nav>
      <button ref={refBouton} className="burger-menu" onClick={showMenu}>
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
      <a href={Pdf} rel="noopener noreferrer" target="_blank">
        <button className="cv-link button-text semibold">
          Mon CV
          <FontAwesomeIcon icon={faFilePdf} />
        </button>
      </a>
    </header>
  );
};

export default Header;
