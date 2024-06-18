import type { FC } from 'react';
import NameAndFace from '@/fetures/personal/NameAndFace';
import skillsData from './assets/skillsData';
import Skills from './fetures/skills/Skills';
import '.././app/globals.css';

const App: FC = () => {
  return (
    <>
      <div className="mx-auto my-0 max-w-3xl px-6">
        <NameAndFace></NameAndFace>
        <Skills skillsData={skillsData}></Skills>
      </div>
    </>
  );
};

export default App;
