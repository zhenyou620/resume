import type {
  ZennArticleType,
  // ZennResponseType,
} from '@/types/ZennArticleType';
import { zennArticles } from '@/assets/zennArticles';

// const isZennArticle = (data: unknown): data is ZennArticleType => {
//   const d = data as ZennArticleType;

//   return (
//     typeof d?.id === 'number' &&
//     typeof d?.path === 'string' &&
//     d.emoji === 'string' &&
//     d.title === 'string' &&
//     d.published_at === 'string'
//   );
// };

// export const getZennArticle = async (): Promise<ZennArticleType[]> => {
//   const res = await fetch('/articles?username=zhenyou620&order=latest');
//   const data = (await res.json()) as ZennResponseType;

//   const articles: ZennArticleType[] = data.article
//     .slice(0, 10)
//     .filter(isZennArticle);

//   return articles;
// };

export const getZennArticles = (): ZennArticleType[] => {
  const data = zennArticles.articles.map((article) => ({
    id: article.id,
    path: article.path,
    emoji: article.emoji,
    title: article.title,
    published_at: article.published_at,
  }));

  return data;
};
