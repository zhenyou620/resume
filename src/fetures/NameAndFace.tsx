import type { FC } from 'react';
import Face from '../components/Face';

const NameAndFace: FC = () => {
  return (
    <div className="mx-auto mb-0 mt-8 flex w-min flex-row content-center gap-10">
      <Face url="public/face.jpeg" altText="My portrait"></Face>
      <div className="flex flex-shrink-0 flex-col justify-center gap-3">
        <h1 className="-ml-1 text-4xl">Mayu Sakaguchi</h1>
        <p className="text-xl">software developer</p>
      </div>
    </div>
  );
};

export default NameAndFace;
