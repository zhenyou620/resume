interface SkillsDetailType {
  url?: string;
  altText?: string;
  name: string;
  percentage: number;
  category: category;
}

type category = 'design' | 'language' | 'framework' | 'tool';

export default SkillsDetailType;
