'use strict';

const express = require('express');
const router = express.Router();
const articleAdminController = require('../controllers/admin/articles');

// Create
router.post('/article/create', articleAdminController.createArticle);

// Update (GET and POST)
router.route('/article/edit/:id')
  .get(articleAdminController.updateArticle)
  .post(articleAdminController.updateArticle);

// Delete
router.post('/article/delete/:id', articleAdminController.deleteArticle);

module.exports = router;
