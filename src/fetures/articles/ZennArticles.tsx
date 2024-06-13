import { useEffect, useState, type FC } from 'react';
import dayjs from 'dayjs';
import { type ZennArticleType } from '@/types/ZennArticleType';
import { Card, CardContent } from '@/components/ui/card';
import { getZennArticles } from '@/utils/getArticles';

const ZennArticles: FC = () => {
  const [articles, setArticles] = useState<ZennArticleType[]>([]);
  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const result = await getZennArticle();
  //     setArticles(result);
  //   };
  //   void fetchArticles();
  // }, []);

  const zennUrl = 'https://zenn.dev/';

  useEffect(() => {
    const result: ZennArticleType[] = getZennArticles();
    setArticles(result);
  }, []);

  return (
    <section>
      <h1 className="mb-4 mt-12 text-4xl font-semibold">Zenn</h1>
      <div className="mb-10 grid gap-x-2 gap-y-3 sm:grid-cols-2">
        {articles.map((article) => (
          <a key={article.id} href={zennUrl.concat(article.path)}>
            <Card className="pr-2">
              <CardContent>
                <div className="flex flex-row items-center gap-3 pt-4">
                  <p className="p-2 text-6xl">{article.emoji}</p>
                  <div className="flex flex-col">
                    <h2 className="line-clamp-2 text-base font-bold tracking-tight">
                      {article.title}
                    </h2>
                    <p className="text-xs font-medium text-gray-500">
                      {dayjs(article.published_at).format('YYYY/MM/DD')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ZennArticles;
