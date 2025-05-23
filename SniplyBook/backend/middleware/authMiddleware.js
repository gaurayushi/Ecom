import jwt from 'jsonwebtoken';
export default function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token  = header.startsWith('Bearer ') && header.slice(7);
  if (!token) return res.status(401).json({ msg: 'Auth denied' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
}
