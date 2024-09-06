import React from "react";

import "./intro.scss";
import { Github, LinkedIn } from "./images/Icons";
import GirlBanner from "./images/GirlBanner";

const SocialLink = ({ Icon, url }) => {
  return (
    <a className="social-link" href={url}>
      <Icon />
    </a>
  );
};

const socialLinks = [
  { url: "www.linkedin.com/in/nathalie-cadet-9b037a309", icon: LinkedIn },
  { url: "https://github.com/NathCad?tab=repositories", icon: Github },
];

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
          {socialLinks.map(({ url, icon }) => (
            <SocialLink key={url} url={url} Icon={icon} />
          ))}
        </div>
      </section>
      <div className="intro-image">
        <GirlBanner />
      </div>
    </div>
  );
};
export default Intro;
