import React from "react";

import "./aboutMe.scss";
import GirlAboutMe from "./images/GirlAboutMe";

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="image">
        <GirlAboutMe />
      </div>
      <section className="text">
        <h2 className="display-text extrabold">
          <span className="regular">About</span>&nbsp;Me
        </h2>
        <p className="paragraph-p1 regular">
          Je suis une développeuse junior passionnée par le développement
          d'applications web.
        </p>
        <p className="paragraph-p1 regular">
          Après avoir exercé le métier de Monitrice-Educatrice j'ai souhaité me
          reconvertir vers les métiers du développement, car j'ai été attiré par
          le mélange de créativité et de technique qu'il requiert.
        </p>
        <p className="paragraph-p1 regular">
          Afin de me former et poser les premières pierres de ma nouvelle
          carrière, j'ai suivi une formation diplomante au métier de
          Développeuse Web avec OpenClassrooms.
        </p>
        <p className="paragraph-p1 regular">
          Me voilà maintenant diplômée et prête à relever les nouveaux défis que
          vous pourrez me proposer.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
