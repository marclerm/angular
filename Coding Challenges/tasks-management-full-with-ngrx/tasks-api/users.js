const bcrypt = require('bcrypt');
const users = [];

module.exports = {
  getUserByMail: (email) => users.find(user => user.email === email),
  addUser: async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { name, email, password: hashedPassword };
    users.push(user);
    return user;
  },
  validatePassword: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  }
};
