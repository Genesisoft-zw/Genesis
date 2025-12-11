import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  content: string;
}

// Import all markdown files from the blogs directory
const blogFiles = import.meta.glob('../content/blogs/*.md', { 
  eager: true,
  query: '?raw',
  import: 'default'
});

// Parse all blog posts
export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in blogFiles) {
    const fileContent = blogFiles[path] as string;
    const { data, content } = matter(fileContent);
    
    posts.push({
      slug: data.slug || '',
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      author: data.author || '',
      content: content,
    });
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const allPosts = getAllBlogPosts();
  return allPosts.find(post => post.slug === slug);
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

