import type { FC } from 'react';
// import faceImage from '../assets/face.jpeg';
// import Face from '../components/Face';

const NameAndFace: FC = () => {
  return (
    <div className="mx-auto mb-0 mt-8 flex flex-col content-center gap-5">
      {/* <Face url={faceImage} altText="My portrait"></Face> */}
      <div className="flex items-center gap-5">
        <div className="face h-14 w-14 rounded-xl"></div>
        <span className="-ml-1 text-6xl font-bold tracking-tight">
          Mayu Sakaguchi
        </span>
      </div>
      <div className="flex flex-shrink-0 flex-col justify-end gap-4">
        <p className="text-xl">
          Software developer.&nbsp;&nbsp;Born 29 July 1999.
        </p>
        <div className="flex gap-4">
          <a href="https://zenn.dev/zhenyou620" className="w-7">
            <img
              src="src/assets/imgs/zenn.svg"
              alt="Zenn Link"
              className="w-8"
            ></img>
          </a>
          <a href="https://note.com/zhenyou620" className="w-18">
            <img
              src="src/assets/imgs/note.svg"
              alt="Note Link"
              className="w-8"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameAndFace;
