import type { FC } from 'react';

type Props = {
  url: string;
  altText: string;
};

const faceImage: FC<Props> = ({ url, altText }) => {
  return (
    <div className="w-48">
      <img src={url} alt={altText}></img>
    </div>
  );
};

export default faceImage;
