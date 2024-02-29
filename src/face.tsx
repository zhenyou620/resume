import type { FC } from 'react';

type Props = {
  src: string;
  altText?: string;
};

const faceImage: FC<Props> = ({ src, altText }) => {
  return (
    <div className="w-16 h-16">
      <img src={src} alt={altText}></img>
    </div>
  );
};

export default faceImage;
