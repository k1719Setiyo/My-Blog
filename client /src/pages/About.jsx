import React from 'react';

export default function About() {
  return (
    <div className="markdown-content">
      <h1 className="mb-2">About</h1>
      
      <p>
        Welcome to <strong>The Minimalist Reader</strong>. This blog is a reflection of my journey towards simplicity, clarity, and focus in a noisy world.
      </p>

      <p>
        I believe that good design is invisible. It should get out of the way and let the content speak for itself. That's why I built this site with a focus on typography, whitespace, and readability.
      </p>

      <h3>What I Write About</h3>
      <ul>
        <li><strong>Minimalism:</strong> Finding joy in less.</li>
        <li><strong>Productivity:</strong> Doing work that matters.</li>
        <li><strong>Design:</strong> Creating calm in digital spaces.</li>
      </ul>

      <blockquote>
        "Simplicity is the ultimate sophistication." — Leonardo da Vinci
      </blockquote>

      <p>
        Thank you for reading. I hope you find something here that resonates with you.
      </p>
    </div>
  );
}
