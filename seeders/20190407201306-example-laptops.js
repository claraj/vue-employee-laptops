'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Laptops', [
      { brand: 'Apple', model: 'MacBook', serialNumber: '00001', employeeId: 2, createdAt: new Date(), updatedAt: new Date()},
      { brand: 'Lenovo', model: 'AA12', serialNumber: '00002', createdAt: new Date(), updatedAt: new Date()},
      { brand: 'Dell', model: 'XZ99', serialNumber: '00003', employeeId: 1, createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Laptops', null, {})

  }
};
