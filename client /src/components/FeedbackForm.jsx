import React, { useState } from 'react';

export default function FeedbackForm({ postTitle }) {
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-4 p-4" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '4px', color: '#166534' }}>
        <p className="font-sans text-sm"><strong>Thank you!</strong> Your feedback has been sent directly to me.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
      <h3 className="font-sans text-sm mb-2">Send Private Feedback</h3>
      <p className="text-muted text-sm mb-2">
        Have a thought on this post? Send me a private note. It won't be published.
      </p>
      
      <form name="feedback" method="POST" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="hidden" name="form-name" value="feedback" />
        <input type="hidden" name="postTitle" value={postTitle} />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name (Optional)"
            style={{ padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-sans)' }}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email (Optional)"
            style={{ padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-sans)' }}
          />
        </div>
        
        <textarea 
          name="message" 
          required 
          placeholder="Your message..."
          rows="3"
          style={{ padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-sans)', width: '100%' }}
        ></textarea>
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          style={{ 
            alignSelf: 'flex-start',
            padding: '0.5rem 1rem', 
            background: 'var(--color-text)', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem'
          }}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Private Note'}
        </button>
        
        {status === 'error' && (
          <p className="text-sm" style={{ color: '#DC2626' }}>Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
