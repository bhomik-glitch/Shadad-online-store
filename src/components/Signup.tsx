import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/shop', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setShowLoginPrompt(false);
    setIsSubmitting(true);
    try {
      const res = await fetch(`http://localhost:5000/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      console.log('Signup response:', res.status, data);
      if (res.ok) {
        setMessage('Signup successful!');
        setTimeout(() => {
          window.location.reload();
          navigate('/shop');
        }, 1000);
      } else {
        setMessage(data.error || 'Signup failed');
        if (data.error && data.error.toLowerCase().includes('email')) {
          setShowLoginPrompt(true);
        }
      }
    } catch (err) {
      setMessage('Network error');
    }
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: 32, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: 320 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Signup</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: 10,
              borderRadius: 4,
              background: isSubmitting ? '#17412e' : '#22543d',
              color: '#fff',
              border: 'none',
              fontWeight: 600,
              transform: isSubmitting ? 'scale(0.97)' : 'scale(1)',
              transition: 'all 0.1s',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Signup'}
          </button>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
          {message && <p style={{ textAlign: 'center', color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
        </form>
        {showLoginPrompt && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
          }}>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.2)', minWidth: 300, textAlign: 'center' }}>
              <p>An account with this email already exists. Would you like to log in?</p>
              <button onClick={() => navigate('/login')} style={{ margin: '16px 8px 0 0', padding: '8px 16px', borderRadius: 4, background: '#22543d', color: '#fff', border: 'none' }}>Login</button>
              <button onClick={() => setShowLoginPrompt(false)} style={{ margin: '16px 0 0 8px', padding: '8px 16px', borderRadius: 4, background: '#eee', color: '#333', border: 'none' }}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup; 