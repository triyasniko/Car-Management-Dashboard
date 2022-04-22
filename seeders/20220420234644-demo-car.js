'use strict';

const dataCars = [
  {
    plate: 'DBH-3491',
    manufacture: 'Ford',
    image: 'fi_car.png',
    capacity: 3,
    rentPerDay: 200000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    plate: "WXB-3984",
    manufacture: "BMW",
    image: "fi_car.png",
    capacity: 6,
    rentPerDay: 800000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    plate: "OSL-4224",
    manufacture: "Lincoln",
    image: "fi_car.png",
    capacity: 6,
    rentPerDay: 900000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    plate: "VPT-9753",
    manufacture: "BMW",
    image: "fi_car.png",
    capacity: 6,
    rentPerDay: 900000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    plate: "BHD-3923",
    manufacture: "Lincoln",
    image: "fi_car.png",
    capacity: 2,
    rentPerDay: 200000,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cars', dataCars, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};