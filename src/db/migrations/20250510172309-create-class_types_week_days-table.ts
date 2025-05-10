'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE class_schedule_week_days (
        class_schedules_id BIGINT UNSIGNED NOT NULL,
        week_days_id BIGINT UNSIGNED NOT NULL,
        PRIMARY KEY (class_schedules_id, week_days_id),
        FOREIGN KEY (class_schedules_id) REFERENCES class_schedules(id) ON DELETE CASCADE,
        FOREIGN KEY (week_days_id) REFERENCES week_days(id) ON DELETE CASCADE
      );
    `)
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
    DROP TABLE IF EXISTS class_types_week_days;
    `)
  }
};
