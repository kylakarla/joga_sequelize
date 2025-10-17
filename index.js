const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

dotenv.config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVER
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sample route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to sequelize app'});
});
const articleRouter = require('./routes/article.js');
app.use('/articles', articleRouter);

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

// Start the server
app.listen(3026, () => {
  console.log('Server is running at http://localhost:3026');
});