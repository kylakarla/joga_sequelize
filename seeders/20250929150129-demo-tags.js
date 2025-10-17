'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Üks bulkInsert kõigi tagidega korraga
    return queryInterface.bulkInsert('Tags', [
      { id: 1, name: 'yogapractice', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'yogainspiration', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'wellness', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'nature', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'spirituality', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'sport', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'yogateacher', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};