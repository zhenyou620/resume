import type { FC } from 'react';
import DummyFaceImage from './DummyFace';

const App: FC = () => {
  return (
    <div className="mx-auto mb-0 mt-8 flex w-min flex-row content-center gap-7">
      <DummyFaceImage></DummyFaceImage>
      <div className="flex flex-shrink-0 flex-col justify-center gap-3">
        <h1 className="-ml-1 text-4xl">Mayu Sakaguchi</h1>
        <p className="text-xl">software developer</p>
      </div>
    </div>
  );
};

export default App;
