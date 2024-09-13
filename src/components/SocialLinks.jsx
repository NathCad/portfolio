import React from "react";

import { Github, LinkedIn } from "./images/Icons";

import "./SocialLinks.scss";

const SocialLink = ({ Icon, url, name }) => {
  return (
    <a className="social-link" href={url} aria-label={name}>
      <Icon />
    </a>
  );
};

export const LinkedInLink = () => (
  <SocialLink
    url="www.linkedin.com/in/nathalie-cadet-9b037a309"
    Icon={LinkedIn}
    name="LinkedIn"
  />
);
export const GitHubLink = () => (
  <SocialLink
    url="https://github.com/NathCad?tab=repositories"
    Icon={Github}
    name="GitHub"
  />
);

const SocialLinks = () => {
  return (
    <>
      <LinkedInLink />
      <GitHubLink />
    </>
  );
};

export default SocialLinks;
