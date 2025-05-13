'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('center_holidays',
      [
        {
          center_id: 1,
          holiday_date: new Date('2025-12-25'),
          reason: 'Christmas Day',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          center_id: 1,
          holiday_date: new Date('2026-01-01'),
          reason: "New Year's Day",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          center_id: 2,
          holiday_date: new Date('2025-07-04'),
          reason: 'Independence Day',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('center_holidays', []);
  }
};
