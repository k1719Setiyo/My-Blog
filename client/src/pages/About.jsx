import React from 'react';
import ReactMarkdown from 'react-markdown';
import aboutData from '../data/pages/about.json';

export default function About() {
  return (
    <div className="markdown-content">
      <h1 className="mb-2">{aboutData.title}</h1>
      <ReactMarkdown>{aboutData.body}</ReactMarkdown>
    </div>
  );
}
