import { Analysis, Calm, Communication, Empathy, TeamWork } from "./images/Icons";
import SkillSet from "./skills/SkillSet";

import "./softSkills.scss";

const skills = [
  {name: "Esprit d'analyse", icon: Analysis},
  {name: "Esprit d'équipe", icon: TeamWork},
  {name: "Prise de recul", icon: Calm},
  {name: "Communication", icon: Communication},
  {name: "Empathie", icon: Empathy},
]

const SoftSkills = () => {
  return (
    <SkillSet className={"soft-skills"} nameClassName={"heading-h5 bold"}
    title={<h2 className="display-text extrabold">
      <span className="regular">Soft</span>&nbsp;Skills
    </h2>}
    skills={skills}/>
  );
};
export default SoftSkills;
