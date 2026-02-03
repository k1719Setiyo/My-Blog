import remarkSupersub from 'remark-supersub';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../lib/posts';
import settings from '../data/settings.json';

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostBySlug(slug).then((data) => {
      setPost(data);
      // Update Browser Tab Title
      if (data) {
        document.title = `${data.title} | ${settings.site_title}`;
      }
    });
  }, [slug]);

  if (!post) return <div className="container mt-4 text-center">Loading...</div>;

  return (
    <article>
           <header className="mb-4">
        <div className="font-sans text-sm text-muted mb-1">
          {post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontWeight: '700' }}>{post.title}</h1>
        {post.subtitle && (
          <h2 style={{ 
            fontSize: '1.35rem', 
            fontWeight: '400', 
            color: 'var(--color-text)', 
            marginTop: '0', 
            marginBottom: '2rem',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic'
          }}>
            {post.subtitle}
          </h2>
        )}
      </header>


      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkSupersub]}>{post.content}</ReactMarkdown>
      </div>

      <FeedbackForm postTitle={post.title} />

      <div className="mt-4 pt-2 border-top" style={{ borderTop: '1px solid var(--color-border)' }}>
        <Link to="/" className="font-sans text-sm text-muted">← Back to Home</Link>
      </div>
    </article>
  );
}
