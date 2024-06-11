interface ZennArticleType {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
}

interface ZennResponseType {
  article: ZennArticleType[];
}

export type { ZennArticleType, ZennResponseType };
