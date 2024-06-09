import type { FC } from 'react';
import SkillCard from '../components/SkillCard';
import type SkillsDetailType from '../types/SkillsDetailType';

interface SkillsProps {
  skillsData: SkillsDetailType[];
}

const Skills: FC<SkillsProps> = ({ skillsData }) => {
  return (
    <>
      <h2 className="text-3xl">Skills</h2>
      <div className="h-32 w-32">
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
