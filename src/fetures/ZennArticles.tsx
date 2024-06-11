import { useEffect, useState, type FC } from 'react';
import { type ZennArticleType } from '@/types/ZennArticleType';
import getZennArticle from '@/utils/getArticles';

const ZennArticles: FC = () => {
  const [articles, setArticles] = useState<ZennArticleType[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const result = await getZennArticle();
      setArticles(result);
    };
    void fetchArticles();
  }, []);

  return (
    <>
      <h2 className="mb-2 mt-8 text-3xl font-medium">Zenn</h2>
      <div className="flex">
        {articles.map((article) => (
          <div key={article.id}></div>
        ))}
      </div>
    </>
  );
};

export default ZennArticles;
