interface SkillsDetailType {
  url?: string;
  altText?: string;
  name: string;
  category: category;
}

type category = 'design' | 'language' | 'framework' | 'tool';

export default SkillsDetailType;
