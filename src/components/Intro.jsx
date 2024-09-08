import React from "react";

import "./intro.scss";
import GirlBanner from "./images/GirlBanner";
import SocialLinks from './SocialLinks';



const Intro = () => {
  return (
    <div className="intro">
      <section className="presentation">
        <h1 className="display-text extrabold">
          <span className="hello-world display-text regular">
            Hello World !&nbsp;
          </span>
          Ici Nathalie Cadet.
        </h1>
        <h2>
          <span className="display-text extrabold">Développeuse&nbsp;</span>
          <span className="outlined extrabold">Web</span>
        </h2>
        <p className="intro-text paragraph-p1 regular">
          Venue d'un autre monde professionnel, je fais aujourd'hui ce qui me
          plaît: développer des applications web en full stack.
          <br />
          Je vous invite à travers mon Portfolio à visionner mes projets et
          découvrir mes compétences.
        </p>
        <div className="social-links">
          <SocialLinks />
        </div>
      </section>
      <div className="intro-image">
        <GirlBanner />
      </div>
    </div>
  );
};
export default Intro;
