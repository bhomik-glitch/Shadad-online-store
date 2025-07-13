import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
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
    setShowSignupPrompt(false);
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Login successful!');
        localStorage.setItem('token', data.token);
        setTimeout(() => {
          window.location.reload(); // This will update the header state
          navigate('/shop');
        }, 1000);
      } else {
        setMessage(data.error || 'Login failed');
        if (data.error === 'User not found') {
          setShowSignupPrompt(true);
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
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
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
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
          {message && <p style={{ textAlign: 'center', color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
        </form>
        {showSignupPrompt && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
          }}>
            <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.2)', minWidth: 300, textAlign: 'center' }}>
              <p>No account found for this email. Would you like to sign up?</p>
              <button onClick={() => navigate('/signup')} style={{ margin: '16px 8px 0 0', padding: '8px 16px', borderRadius: 4, background: '#22543d', color: '#fff', border: 'none' }}>Sign up</button>
              <button onClick={() => setShowSignupPrompt(false)} style={{ margin: '16px 0 0 8px', padding: '8px 16px', borderRadius: 4, background: '#eee', color: '#333', border: 'none' }}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login; 