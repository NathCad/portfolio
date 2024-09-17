import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Pdf from "../assets/Nathalie_Cadet_CV_Dev.pdf";
import { ReactNode, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import SkillItem from "./skills/SkillItem";

type NavLinkProps={
  text: ReactNode,
  link: string
}

const NavLink = ({ text, link }:NavLinkProps ) => {
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

  const refNav = useRef<HTMLElement | null>(null);
  const refBouton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const listener = (event : MouseEvent) => {
      if (
        refNav.current?.contains(event.currentTarget as HTMLElement) ||
        refBouton.current?.contains(event.currentTarget as HTMLButtonElement)
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
