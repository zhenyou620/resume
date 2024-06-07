import type { FC } from 'react';
import SkillCard from '../components/SkillCard';
import type SkillsDetailType from '../types/skillsDetailType';

interface SkillsProps {
  skillsData: SkillsDetailType[];
}

const Skills: FC<SkillsProps> = ({ skillsData }) => {
  return (
    <>
      <h2>Skills</h2>
      <div>
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.name}
            url={skill.url ?? ''}
            altText={skill.altText ?? ''}
            name={skill.name}
          ></SkillCard>
        ))}
      </div>
    </>
  );
};

export default Skills;
