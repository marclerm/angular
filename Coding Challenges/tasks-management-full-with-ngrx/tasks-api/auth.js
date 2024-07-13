const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; 

module.exports = {
  generateToken: (user) => {
    return jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
  },
  authenticateToken: (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied. No token provided.');

    jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.status(403).send('Invalid token.');
      req.user = user;
      next();
    });
  }
};
