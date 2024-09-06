import React from "react";

import "./projets.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const projets = [
  {
    title: "Booki",
    image: "/portfolio/booki-optimized.webp",
    url: "https://github.com/NathCad/booki",
    description:
      "Projet de démonstration d'un design responsive pour une agence de location d'appartements",
  },
  {
    title: "Sophie Bluel",
    image: "/portfolio/sophie-bluel-optimized.webp",
    url: "https://github.com/NathCad/Portfolio-architecte-sophie-bluel",
    description:
      "Projet en javascript vanilla de présentation d'un portfolio d'une architecte d'intérieur.\nLe projet affiche une gallerie dynamique de réalisations et donne accès à un mode 'administrateur' qui permet de modifier les éléments de la gallerie au travers d'une api rest",
  },
];

const Projets = () => {
  return (
    <section id="projects">
      <h2 className="display-text extrabold">
        <span className="regular">Mes</span>&nbsp;Projets
      </h2>
      <ol className="projects">
        {projets.map(({ title, image, url, description }, index) => (
          <li key={url}>
            <article className="project">
              <img className="image" src={image} alt={description} />
              <section className="project-content">
                <h3 className="title">
                  <span className="display-text extrabold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="heading-h2 bold">{title}</span>
                </h3>
                <p className="description">{description}</p>
                <a className="link" href={url}>
                  <FontAwesomeIcon className="fa-2x" icon={faArrowUpRightFromSquare} />
                </a>
              </section>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Projets;
