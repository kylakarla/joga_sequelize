'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Authors', [
      {
        name: 'Karl Markus',
        email: 'karl@example.com',
        bio: 'Õpetaja ja arendaja.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mari Maasikas',
        email: 'mari@example.com',
        bio: 'Kirjanik ja blogija.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Authors', null, {});
  }
};
