'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('Articles', [
    {
      name: 'Introduction to Ashtanga',
      slug: 'introduction-to-ashtanga',
      image: 'ashtanga.jpg',
      body: 'Ashtanga yoga is a dynamic and physically demanding practice that synchronizes breath with movement.',
      published: '2020-01-15 15:30:00',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      name: 'The Benefits of Meditation',
      slug: 'the-benefits-of-meditation',
      image: 'meditation.jpg',
      body: 'Meditation offers numerous benefits including reduced stress, improved concentration, and enhanced emotional health.',
      published: '2020-02-20 10:00:00',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      name: 'Yoga for Beginners',
      slug: 'yoga-for-beginners',
      image: 'yoga_beginners.jpg',
      body: 'Starting yoga can be intimidating, but with the right guidance, beginners can quickly find their flow and enjoy the practice.',
      published: '2020-03-10 09:00:00',
      updatedAt: new Date(),
      createdAt: new Date()
    }
  ], {});
},


async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Articles', null, {});
}
};
