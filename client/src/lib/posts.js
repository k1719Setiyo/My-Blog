import matter from 'gray-matter';
import { Buffer } from 'buffer';

// This is a workaround for browser environment where 'process' and 'fs' are not available
// In a real build step (like Next.js or Gatsby), this would be done at build time.
// For this Vite setup, we'll use import.meta.glob to load files.

window.Buffer = Buffer; // Polyfill for gray-matter

export async function getAllPosts() {
  const modules = import.meta.glob('../posts/*.md', { as: 'raw' });
  const posts = [];

  for (const path in modules) {
    const content = await modules[path]();
    const { data, content: markdown } = matter(content);
    
    // Extract slug from filename
    const slug = path.split('/').pop().replace('.md', '');
    
    posts.push({
      slug,
      ...data,
      content: markdown,
      date: data.date ? new Date(data.date) : new Date(),
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => b.date - a.date);
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}
