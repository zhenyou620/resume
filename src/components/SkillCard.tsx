import { type FC } from 'react';

type Props = {
  url: string;
  altText: string;
  name: string;
};

const skillCard: FC<Props> = ({ url, altText, name }) => {
  return (
    <div className="flex flex-row">
      <img src={url} alt={altText} className="w-12"></img>
      <p className="">{name}</p>
    </div>
  );
};

export default skillCard;
