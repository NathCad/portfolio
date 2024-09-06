import React from "react";

const SkillItem = ({ name, Icon, nameClassName = "heading-h6 bold"}) => {
  return (
    <li className="skill-item">
      <article className="skill">
        <Icon />
        <h3 className={nameClassName}>{name}</h3>
      </article>
    </li>
  );
};
export default SkillItem;
