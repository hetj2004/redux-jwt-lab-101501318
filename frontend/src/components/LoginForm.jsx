import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';

function LoginForm() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('het@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>JWT Login (Redux Demo)</h2>
      <p>Use: het@example.com / password123</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label>
          <input
            style={{ width: '100%', padding: '8px' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label>
          <input
            style={{ width: '100%', padding: '8px' }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{ padding: '8px 16px' }}
        >
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

export default LoginForm;
