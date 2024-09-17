import SkillItem from "./SkillItem";

type SkillType = {
  name: string,
  icon: () => React.JSX.Element
}

type SkillSetProps={
  className: string,
  title: React.JSX.Element,
  skills: SkillType[],
  nameClassName: string
}

const SkillSet = ({className, title, skills, nameClassName}: SkillSetProps) => {
    return (
      <section className={className}>
        {title}
        <ul>
          {skills.map(({ name, icon }) => (
            <SkillItem key={name} name={name} Icon={icon} nameClassName={nameClassName}/>
          ))}
        </ul>
      </section>
    );
  };
export default SkillSet;