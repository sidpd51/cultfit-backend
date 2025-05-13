'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('days', [
      {
        name: "sunday"
      },
      {
        name: "monday"
      },
      {
        name: "tuesday"
      },
      {
        name: "wednesday"
      },
      {
        name: "thursday"
      },
      {
        name: "friday"
      },
      {
        name: "saturday"
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('days', []);
  }
};
