import { type FC } from 'react';

type Props = {
  url: string;
  altText: string;
  name: string;
};

const skillCard: FC<Props> = ({ url, altText, name }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={url} alt={altText} className="w-16"></img>
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default skillCard;
