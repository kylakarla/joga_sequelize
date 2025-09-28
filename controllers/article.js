
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVER
});
const Author = require('../models/author')(sequelize, DataTypes);

// Article mudeli importimine
const Article = require('../models/article')(sequelize, DataTypes);
class articleController {
// Hangi kõik artiklid
getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Andmete laadimine ebaõnnestus.' });
    }
};
getArticleBySlug = async (req, res) => {
    try {
        const article = await Article.findOne({ where: { slug: req.params.slug }, include: 'author' });
        if (!article) {
            return res.status(404).json({ error: 'Artiklit ei leitud.' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: 'Andmete laadimine ebaõnnestus.' });
    }
};

// Hangi üks artikkel ID järgi
getArticleById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Artiklit ei leitud.' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: 'Andmete laadimine ebaõnnestus.' });
    }
};
}
module.exports = new articleController();