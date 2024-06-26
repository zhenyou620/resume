import type { FC } from 'react';
// import faceImage from '../assets/face.jpeg';
// import Face from '../components/Face';

const NameAndFace: FC = () => {
  return (
    <div className="mx-auto mb-0 mt-8 flex flex-col content-center gap-5">
      <div className="mb-2 flex items-center gap-5">
        <div className="face hidden h-14 w-14 rounded-xl sm:block"></div>
        <span className="-ml-1 text-6xl font-bold tracking-tight">
          Mayu Sakaguchi
        </span>
      </div>
      <div className="text-base tracking-wide">
        <p>
          Mayu is a Software developer.&nbsp;&nbsp;I was born and raised in
          Nagoya in July 1999.
        </p>
        <p>I like to drink, and recently craft beer has become my favourite.</p>
      </div>
      <div className="flex flex-shrink-0 flex-col justify-end gap-4">
        <div className="flex gap-4">
          <a href="https://zenn.dev/zhenyou620" className="w-7">
            <img src="/resume/zenn.svg" alt="Zenn Link" className="w-8"></img>
          </a>
          <a href="https://note.com/zhenyou620" className="w-18">
            <img src="/resume/note.svg" alt="Note Link" className="w-8"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameAndFace;
