import type {
  ZennArticleType,
  ZennResponseType,
} from '@/types/ZennArticleType';

const isZennArticle = (data: unknown): data is ZennArticleType => {
  const d = data as ZennArticleType;

  return (
    typeof d?.id === 'number' &&
    typeof d?.path === 'string' &&
    d.emoji === 'string' &&
    d.title === 'string' &&
    d.published_at === 'string'
  );
};

const getZennArticle = async (): Promise<ZennArticleType[]> => {
  const res = await fetch('/articles?username=zhenyou620&order=latest');
  const data = (await res.json()) as ZennResponseType;

  const articles: ZennArticleType[] = data.article
    .slice(0, 10)
    .filter(isZennArticle);

  return articles;
};

export default getZennArticle;
