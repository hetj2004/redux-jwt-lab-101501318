import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div>
      <header style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
        <h1>React Redux + JWT Demo – Het Jasani (101501318)</h1>
      </header>

      {/* If not logged in → show login form */}
      {!token ? <LoginForm /> : <Profile />}
    </div>
  );
}

export default App;
