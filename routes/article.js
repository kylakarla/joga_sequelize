const express  = require('express');
const router = express.Router();
const articleController = require('../controllers/article.js');

// Route to get all articles
router.get('/', articleController.getAllArticles);

module.exports = router;