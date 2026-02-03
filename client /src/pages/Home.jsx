import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div>
      <div className="mb-4">
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>The Minimalist Reader</h1>
        <p className="text-muted font-sans text-sm">
          A space for clarity and focus.
        </p>
      </div>

      <div className="post-list">
        {posts.map(post => (
          <article key={post.slug} className="mb-4" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
            <div className="font-sans text-sm text-muted mb-1">
              {post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <h2 className="mb-1" style={{ fontSize: '1.5rem' }}>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>
              {post.description}
            </p>
            <div className="mt-1">
              <Link to={`/post/${post.slug}`} className="font-sans text-sm" style={{ color: 'var(--color-text)', textDecoration: 'underline' }}>
                Read
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
