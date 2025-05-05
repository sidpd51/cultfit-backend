'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
    CREATE TABLE IF NOT EXISTS centers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      location TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP DEFAULT NULL
    );`
    )
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(
      `DROP TABLE IF EXISTS centers;`
    )
  }
};
