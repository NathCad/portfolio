import React from "react";

import { Github, LinkedIn } from "./images/Icons";

import "./SocialLinks.scss";

const socialLinks = [
  {
    url: "www.linkedin.com/in/nathalie-cadet-9b037a309",
    icon: LinkedIn,
    name: "LinkedIn",
  },
  {
    url: "https://github.com/NathCad?tab=repositories",
    icon: Github,
    name: "GitHub",
  },
];

const SocialLink = ({ Icon, url, name }) => {
  return (
    <a className="social-link" href={url} aria-label={name}>
      <Icon />
    </a>
  );
};

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map(({ url, icon, name }) => (
        <SocialLink key={url} url={url} Icon={icon} name={name} />
      ))}
    </>
  );
};

export default SocialLinks;
