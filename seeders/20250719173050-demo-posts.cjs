'use strict';
const { v4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        id: v4(),
        title: 'First Post',
        content: 'This is the first post content.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        title: 'Second Post',
        content: 'Another post for testing.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
