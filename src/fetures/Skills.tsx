import type { FC } from 'react';
import SkillCard from '../components/SkillCard';
import type SkillsDetailType from '../types/SkillsDetailType';

interface SkillsProps {
  skillsData: SkillsDetailType[];
}

const Skills: FC<SkillsProps> = ({ skillsData }) => {
  return (
    <>
      <h2 className="mb-2 mt-8 text-3xl font-medium">Skills</h2>
      <div className="flex flex-1 flex-wrap gap-3">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.name}
            url={skill.url ?? ''}
            altText={skill.altText ?? ''}
            name={skill.name}
            percentage={skill.percentage}
          ></SkillCard>
        ))}
      </div>
    </>
  );
};

export default Skills;
