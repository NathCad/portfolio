import React from "react";

import "./devSkills.scss";
import {
  Css3,
  ExpressJs,
  Git,
  Html5,
  Javascript,
  MongoDb,
  NodeJs,
  ReactIcon,
  Sass,
} from "./images/Icons";
import SkillSet from "./skills/SkillSet";

const skills = [
  { name: "Html 5", icon: Html5 },
  { name: "Css 3", icon: Css3 },
  { name: "Sass", icon: Sass },
  { name: "Javascript", icon: Javascript },
  { name: "React", icon: ReactIcon },
  { name: "Node Js", icon: NodeJs },
  { name: "Express Js", icon: ExpressJs },
  { name: "MongoDb", icon: MongoDb },
  { name: "Git", icon: Git },
];

const DevSkills = () => {
  return (
    <SkillSet
      className={"dev-skills"}
      title={
        <h2 className="display-text extrabold">
          <span className="regular">Dev</span>&nbsp;Skills
        </h2>
      }
      skills={skills}
    />
  );
};
export default DevSkills;
