import React from "react";

type SkillItemProps = {
  name: string,
  Icon: () => React.JSX.Element,
  nameClassName?: string
}

const SkillItem = ({ name, Icon, nameClassName = "heading-h6 bold" }: SkillItemProps) => {
  return (
    <li className="skill-item">
      <article className="skill">
        <div className="icon">
          <Icon />
        </div>
        <h3 className={nameClassName}>{name}</h3>
      </article>
    </li>
  );
};
export default SkillItem;
