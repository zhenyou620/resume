import type { FC } from 'react';
import skillsData from './assets/skillsData';
import NameAndFace from './fetures/NameAndFace';
import Skills from './fetures/Skills';
import '.././app/globals.css';
import ZennArticles from './fetures/ZennArticles';

const App: FC = () => {
  return (
    <>
      <div className="mx-auto my-0 max-w-3xl px-6">
        <NameAndFace></NameAndFace>
        <Skills skillsData={skillsData}></Skills>
        <ZennArticles></ZennArticles>
      </div>
    </>
  );
};

export default App;
