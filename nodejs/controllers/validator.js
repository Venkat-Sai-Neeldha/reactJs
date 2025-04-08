const validateLogin = (req, res) => {
    const { name, password } = req.body;
  
   
    if (!name || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }
    const usernameValid = /^[a-zA-Z0-9 ]+$/.test(name);
    if (!usernameValid) {
      return res.status(400).json({ error: 'Username can only contain letters, numbers, and spaces.' });
    }
  
    
    const passwordHasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!passwordHasSpecialChar) {
      return res.status(400).json({ error: 'Password must contain at least one special character.' });
    }
  
    const validUsername = 'VenkatSai';
    const validPassword = 'sai@123';

    if (name === validUsername && password === validPassword) {
      return res.status(200).json({ message: `Login successful!${name}` });
    } else {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
  };






  const User = require('../models/usermodel.js');
//controller to vadilate login from database
const validateLogindb = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {

    const user = await User.findOne({ where: { name } });

   
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

   
    if (password === user.password) {
      return res.status(200).json({ message: 'Login successful!' });
    } else {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
  } catch (err) {
    console.error('Database query error: ', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

  
  module.exports = {
    validateLogin,validateLogindb,
  };
  