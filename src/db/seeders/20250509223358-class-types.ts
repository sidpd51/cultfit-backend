'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('class_types', [
      {
        "name": "Yoga",
        "description": "A mind and body practice that combines physical postures, breathing exercises, and meditation."
      },
      {
        "name": "HIIT",
        "description": "High-Intensity Interval Training involving short bursts of intense exercise alternated with low-intensity recovery periods."
      },
      {
        "name": "Strength Training",
        "description": "Focuses on building muscle mass and endurance using resistance exercises."
      },
      {
        "name": "Zumba",
        "description": "A dance-based cardio workout combining Latin and international music with energetic routines."
      },
      {
        "name": "Pilates",
        "description": "A low-impact fitness system emphasizing core strength, flexibility, and awareness."
      },
      {
        "name": "Boxing",
        "description": "A high-intensity workout involving punching combos, footwork, and cardio drills."
      },
      {
        "name": "Spin Class",
        "description": "Indoor cycling workout focused on endurance, strength, and intervals."
      },
      {
        "name": "CrossFit",
        "description": "A high-intensity fitness program incorporating elements from several sports and exercises."
      },
      {
        "name": "Mobility & Flexibility",
        "description": "Designed to improve range of motion, reduce stiffness, and aid in recovery."
      },
      {
        "name": "Meditation",
        "description": "A calming practice focused on breath control, mindfulness, and mental clarity."
      }
    ], {}
    )
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('People', [], {});
  }
};
