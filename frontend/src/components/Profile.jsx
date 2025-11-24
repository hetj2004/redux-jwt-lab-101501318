import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, logout } from '../features/auth/authSlice';

function Profile() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (status === 'loading' && !user) {
    return <p>Loading profile...</p>;
  }

  if (error && !user) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Protected Profile</h2>

      {user && (
        <>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p>{user.message}</p>
        </>
      )}

      <button
        style={{ marginTop: '1rem', padding: '8px 16px' }}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
