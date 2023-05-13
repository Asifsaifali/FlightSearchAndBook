'use strict';

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

    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber:'Vistara BX26',
        capacity:200,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      
      {
        modelNumber:'Kistara BX86',
        capacity:200,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        modelNumber:'Nistara BX16',
        capacity:200,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      
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
