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
      "Projet de démonstration d'un design responsive pour une agence de voyage.",
  },
  {
    title: "Sophie Bluel",
    image: "/portfolio/sophie-bluel-optimized.webp",
    url: "https://github.com/NathCad/Portfolio-architecte-sophie-bluel",
    description:
      "Projet en javascript vanilla de présentation d'un portfolio d'une architecte d'intérieur.\nLe projet affiche une gallerie dynamique de réalisations et donne accès à un mode 'administrateur' qui permet de modifier les éléments de la gallerie au travers d'une api rest.",
  },
  {
    title: "Nina Carducci",
    image: "/portfolio/nina-arducci-optimized.webp",
    url: "https://github.com/NathCad/Nina-Carducci-Dev",
    description:
      "Sur ce projet j'ai réalisé un travail d'optimisation d'un portfolio d'une photographe.\nAu programme: optimisation des performances, travail sur le SEO du site, amélioration de l'accessibilité, mise en place du référencement local et du référencement sur les réseaux sociaux.",
  },
  {
    title: "Kasa",
    image: "/portfolio/kasa-optimized.webp",
    url: "https://github.com/NathCad/Kasa",
    description:
      "Projet web frontend en \u2764 React \u2764 pour une agence de location immobilière.\nLe projet m'a notamment permis de mettre en oeuvre le routage côté client avec react-router. Il est construit avec Vite.js et répond aux normes de développement actuelles.",
  },
  {
    title: "Mon vieux grimoire",
    image: "/portfolio/vieux-grimoire-optimized.webp",
    url: "https://github.com/NathCad/Mon-Vieux-Grimoire",
    description:
      "Projet web backend en NodeJs mettant en oeuvre un serveur web express, l'ODM Mongoose et la database MongoDb.\nLe serveur expose une api Rest qui permet d'enregistrer et de noter des livres pour une librairie en ligne.\nLe projet inclus une authentification basée sur les Json Web Tokens (JWT) et met en oeuvre une validation des données grâce aux schémas Mongoose.",
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
                <p className="description paragraph-p1 regular">{description}</p>
                <a className="link" href={url}>
                  <FontAwesomeIcon
                    className="fa-2x"
                    icon={faArrowUpRightFromSquare}
                  />
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
