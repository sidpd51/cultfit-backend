'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('centers', [
      {
        name: "Cult Powai",
        location: "Hiranandani Gardens, Powai, Mumbai, Maharashtra",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Koramangala",
        location: "80 Feet Road, Koramangala 4th Block, Bangalore, Karnataka",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Banjara Hills",
        location: "Rd Number 12, Banjara Hills, Hyderabad, Telangana",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Gachibowli",
        location: "Indira Nagar, Gachibowli, Hyderabad, Telangana",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Andheri West",
        location: "SV Road, Andheri West, Mumbai, Maharashtra",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Anna Nagar",
        location: "2nd Avenue, Anna Nagar, Chennai, Tamil Nadu",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Viman Nagar",
        location: "Phoenix Marketcity, Viman Nagar, Pune, Maharashtra",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Salt Lake",
        location: "Sector V, Salt Lake City, Kolkata, West Bengal",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Indiranagar",
        location: "100 Feet Road, Indiranagar, Bangalore, Karnataka",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cult Sector 29",
        location: "Leisure Valley Rd, Sector 29, Gurgaon, Haryana",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('centers', []);
  }
};
