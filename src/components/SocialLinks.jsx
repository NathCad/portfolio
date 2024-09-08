import React from "react";

import { Github, LinkedIn } from "./images/Icons";

import "./SocialLinks.scss";

const socialLinks = [
  { url: "www.linkedin.com/in/nathalie-cadet-9b037a309", icon: LinkedIn },
  { url: "https://github.com/NathCad?tab=repositories", icon: Github },
];

const SocialLink = ({ Icon, url }) => {
  return (
    <a className="social-link" href={url}>
      <Icon />
    </a>
  );
};

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map(({ url, icon }) => (
        <SocialLink key={url} url={url} Icon={icon} />
      ))}
    </>
  );
};

export default SocialLinks;
