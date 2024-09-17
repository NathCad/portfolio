import React from "react";

import Logo from "./Logo";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <p>
        {" "}
        HTML/CSS par Nathalie Cadet 2024. Implémentation de la{" "}
        <a href="https://www.figma.com/community/file/1318529372146880502/illustration-based-portfolio-website-template" target="_blank">
          maquette figma
        </a>{" "}
        by <a href="https://www.figma.com/@jhanvishah" target="_blank">Jhanvi Shah</a>
      </p>
    </footer>
  );
};

export default Footer;
