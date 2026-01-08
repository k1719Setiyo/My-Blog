import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../lib/posts';

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return <div className="container mt-4 text-center">Loading...</div>;

  return (
    <article>
      <header className="mb-4">
        <div className="font-sans text-sm text-muted mb-1">
          {post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.title}</h1>
      </header>

      <div className="markdown-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <FeedbackForm postTitle={post.title} />

      <div className="mt-4 pt-2 border-top" style={{ borderTop: '1px solid var(--color-border)' }}>
        <Link to="/" className="font-sans text-sm text-muted">← Back to Home</Link>
      </div>
    </article>
  );
}
