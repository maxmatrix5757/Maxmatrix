import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

// Use import.meta.glob to load all markdown files in the content/articles directory
// Using relative path to ensure it works correctly in different environments
const articles = import.meta.glob('../../content/articles/*.md', { as: 'raw', eager: true });

export const getAllPosts = (): BlogPost[] => {
  try {
    return Object.keys(articles).map((path) => {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      const fileContent = articles[path] as string;
      
      // Ensure Buffer is available for gray-matter
      if (typeof window !== 'undefined' && !window.Buffer) {
        console.warn('Buffer not polyfilled yet, loading blog posts might fail');
      }

      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || (content.length > 150 ? content.slice(0, 150) + '...' : content),
        content,
      };
    }).sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return (isNaN(dateB) ? 0 : dateB) - (isNaN(dateA) ? 0 : dateA);
    });
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};
