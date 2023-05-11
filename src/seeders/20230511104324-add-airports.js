'use strict';

const airport = require('../models/airport');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:'Gaya Internationl Airpot',
        cityId:6,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name:'Patna Internationl Airpot',
        cityId:6,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name:'Indira gandhi Internationl Airpot',
        cityId:6,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name:'Kolkta Internationl Airpot',
        cityId:1,
        createdAt:new Date(),
        updatedAt:new Date(),
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
