'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
       CREATE TABLE IF NOT EXISTS class_schedules (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        center_id BIGINT UNSIGNED NOT NULL,
        class_type_id BIGINT UNSIGNED NOT NULL,
        is_recurring BOOLEAN DEFAULT FALSE,
        day_of_week JSON,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL, 
        start_time DATETIME NOT NULL,
        duration_minutes TINYINT,
        FOREIGN KEY (center_id) REFERENCES centers(id) ON DELETE CASCADE,
        FOREIGN KEY (class_type_id) REFERENCES class_types(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT NULL,
        CHECK (duration_minutes = 50)
      );
      `)
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS class_schedules;
      `)
  }
};
