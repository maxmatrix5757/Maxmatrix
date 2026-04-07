import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

// Use import.meta.glob to load all markdown files in the content/articles directory
const articles = import.meta.glob('/content/articles/*.md', { as: 'raw', eager: true });

export const getAllPosts = (): BlogPost[] => {
  return Object.keys(articles).map((path) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const fileContent = articles[path];
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      content,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};
