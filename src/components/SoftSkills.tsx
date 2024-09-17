import {
  Analysis,
  Calm,
  Communication,
  Empathy,
  TeamWork,
} from "./images/Icons";
import SkillSet from "./skills/SkillSet";

import "./softSkills.scss";

const skills = [
  { name: "Esprit d'analyse", icon: Analysis },
  { name: "Esprit d'équipe", icon: TeamWork },
  { name: "Prise de recul", icon: Calm },
  { name: "Communication", icon: Communication },
  { name: "Empathie", icon: Empathy },
];

const SoftSkills = () => {
  return (
    <div id="soft-skills">
      <SkillSet
        className={"soft-skills"}
        nameClassName={"text heading-h5 bold"}
        title={
          <h2 className="display-text extrabold">
            Soft&nbsp;<span className="regular">Skills</span>
          </h2>
        }
        skills={skills}
      />
    </div>
  );
};
export default SoftSkills;
