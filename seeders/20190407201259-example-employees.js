'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Employees', [
        { name: 'Aaaaa Aaaaaa', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Bbbbbb B Bbbbb', createdAt: new Date(), updatedAt: new Date()},
        { name: 'Ccccc Ccccc', createdAt: new Date(), updatedAt: new Date()},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    
    return queryInterface.bulkDelete('Employees', null, {});
    
  }
};
