'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS center_holidays (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        center_id BIGINT UNSIGNED NOT NULL,
        holiday_date DATE NOT NULL,
        reason TEXT,
        UNIQUE KEY (center_id, holiday_date),
        FOREIGN KEY (center_id) REFERENCES centers(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT NULL
      )
    `);

  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS center_holidays;
    `)
  }
};
