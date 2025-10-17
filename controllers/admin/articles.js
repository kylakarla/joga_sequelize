'use strict';

const { Article, Author } = require('../../models');

module.exports = {

  // CREATE ARTICLE
  async createArticle(req, res) {
    if (req.method === 'POST') {
      const { name, slug, image, body, author_id } = req.body;
      try {
        const article = await Article.create({ name, slug, image, body, author_id, published: new Date() });
        return res.status(201).json({ message: 'Article created', article });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  },

  // UPDATE ARTICLE
  async updateArticle(req, res) {
    const { id } = req.params;
    if (req.method === 'GET') {
      try {
        const article = await Article.findByPk(id);
        const authors = await Author.findAll();
        if (!article) return res.status(404).json({ message: 'Article not found' });
        return res.json({ article, authors });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    } else if (req.method === 'POST') {
      const { name, slug, image, body, author_id } = req.body;
      try {
        const article = await Article.findByPk(id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        await article.update({ name, slug, image, body, author_id });
        return res.json({ message: 'Article updated', article });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    }
  },

  // DELETE ARTICLE
  async deleteArticle(req, res) {
    const { id } = req.params;
    if (req.method === 'POST') {
      try {
        const article = await Article.findByPk(id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        await article.destroy();
        return res.json({ message: 'Article deleted' });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }

};
