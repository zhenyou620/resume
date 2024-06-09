import type { FC } from 'react';
// import faceImage from '../assets/face.jpeg';
// import Face from '../components/Face';

const NameAndFace: FC = () => {
  return (
    <div className="mx-auto mb-0 mt-8 flex flex-col content-center gap-5">
      {/* <Face url={faceImage} altText="My portrait"></Face> */}
      <div className="flex items-center gap-5">
        <div className="face h-16 w-16 rounded-xl"></div>
        <span className="-ml-1 text-5xl font-medium">Mayu Sakaguchi</span>
      </div>
      <div className="flex flex-shrink-0 flex-col justify-end gap-3">
        <p className="text-xl">
          Software developer.&nbsp;&nbsp;Born 29 July 1999.
        </p>
      </div>
    </div>
  );
};

export default NameAndFace;
