const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'supersecret_jwt_key_for_lab';

const demoUser = {
  id: 1,
  name: 'Het Jasani',
  email: 'het@example.com',
  passwordHash: bcrypt.hashSync('password123', 10)
};

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (email !== demoUser.email) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, demoUser.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign(
    { id: demoUser.id, email: demoUser.email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.json({
    message: 'Login successful',
    token,
    user: {
      id: demoUser.id,
      name: demoUser.name,
      email: demoUser.email
    }
  });
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
}

app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({
    id: demoUser.id,
    name: demoUser.name,
    email: demoUser.email,
    message: 'This data is protected by JWT'
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
