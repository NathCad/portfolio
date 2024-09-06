import SkillItem from "./SkillItem";

const SkillSet = ({className, title, skills, nameClassName}) => {
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