import { type FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Props = {
  url: string;
  altText: string;
  name: string;
  percentage: number;
};

const skillCard: FC<Props> = ({ url, altText, name, percentage }) => {
  return (
    <Card className="w-52">
      <CardContent>
        <div className="flex flex-row items-center gap-3 pt-4">
          <img
            src={url}
            alt={altText}
            className={name === 'Figma' ? 'w-7' : 'w-9'}
          ></img>
          <div className="w-full">
            <p className="text-base font-medium">{name}</p>
            <div className="flex items-center gap-1">
              <p className="text-xs">{percentage}%</p>
              <Progress value={percentage} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default skillCard;
