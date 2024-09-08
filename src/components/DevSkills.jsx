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
  Scrum,
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
  { name: "Agilité", icon: Scrum}
];

const DevSkills = () => {
  return (
    <div id="dev-skills">
      <SkillSet
        className={"dev-skills"}
        title={
          <h2 className="text display-text extrabold">
            Dev&nbsp;<span className="regular">Skills</span>
          </h2>
        }
        skills={skills}
        nameClassName={"text"}
      />
    </div>
  );
};
export default DevSkills;
